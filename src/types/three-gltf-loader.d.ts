declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { Loader } from 'three';
  export class GLTFLoader extends Loader {
    // Not strict types, but enough for usage
    load(
      url: string,
      onLoad: (gltf: any) => void,
      onProgress?: (event: any) => void,
      onError?: (event: any) => void
    ): void;
  }
}
