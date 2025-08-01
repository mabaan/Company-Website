import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Load Cloudinary config from URL
cloudinary.config(process.env.CLOUDINARY_URL!);

export const MAX_RESUME_SIZE_BYTES =
  parseInt(process.env.RESUME_MAX_SIZE_BYTES || "1048576", 10);

export async function uploadResumeToCloudinary(
  file: File,
  jobId: number | string,
  applicationId: number | string,
  opts: { maxSizeBytes?: number } = {}
): Promise<string> {
  const maxSize = opts.maxSizeBytes ?? MAX_RESUME_SIZE_BYTES;
  if (file.type !== "application/pdf") {
    throw new Error(`Invalid file type: ${file.type}. Only PDF is allowed.`);
  }

  if (file.size > maxSize) {
    throw new Error(
      `File size ${file.size} bytes exceeds the ${maxSize} byte limit.`
    );
  }

  const folderPath = `gcintle/resume/${jobId}`;
  const publicId = `${applicationId}`;

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folderPath,
        public_id: publicId,
        resource_type: "raw",
        format: "pdf",
        overwrite: false,
      },
      (error, result) => {
        if (error || !result?.secure_url) {
          console.error("Cloudinary upload_stream error:", error);
          return reject(error ?? new Error("Missing Cloudinary URL"));
        }
        console.log("Cloudinary upload result:", result);
        resolve(result.secure_url);
      }
    );

    file
      .arrayBuffer()
      .then((buf) =>
        streamifier.createReadStream(Buffer.from(buf)).pipe(uploadStream)
      )
      .catch((err) => {
        console.error("Cloudinary stream error:", err);
        reject(err);
      });
  });
}
