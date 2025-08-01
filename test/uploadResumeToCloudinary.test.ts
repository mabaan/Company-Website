import { test } from 'node:test';
import assert from 'node:assert/strict';

// Set dummy Cloudinary URL to satisfy config during import
process.env.CLOUDINARY_URL = process.env.CLOUDINARY_URL || 'cloudinary://user:pass@cloud-name/test';

import { uploadResumeToCloudinary, MAX_RESUME_SIZE_BYTES } from '../src/lib/uploadResumeToCloudinary.ts';

const bigBuffer = Buffer.alloc(MAX_RESUME_SIZE_BYTES + 1);
const bigFile = new File([bigBuffer], 'too-big.pdf', { type: 'application/pdf' });

test('uploadResumeToCloudinary rejects files larger than limit', async () => {
  await assert.rejects(
    () => uploadResumeToCloudinary(bigFile, 1, 1),
    /exceeds/,
    'expected rejection for oversized file'
  );
});
