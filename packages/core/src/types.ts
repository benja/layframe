export interface JSAsset {
  /** Retrieves the URL to an external file that contains the source code or data. */
  src?: string;

  /** Sets or retrieves the MIME type for the associated scripting engine. */
  type?: string;

  /** Asynchronously loaded script */
  async?: boolean;

  /** How the element handles crossorigin requests */
  crossorigin?: string;

  /** Sets or retrieves the status of the script. */
  defer?: boolean;

  /** @experimental Provides a hint of the relative priority to use when fetching an external script.  */
  fetchpriority?: 'high' | 'low' | 'auto';

  /** Integrity metadata for requests which this element is responsible for. */
  integrity?: string;

  /** Prevent script from being executed in user agents that support module scripts */
  noModule?: boolean;

  /** A cryptographic nonce to allow scripts in a script-src Content-Security-Policy */
  nonce?: string;

  /** Indicates which referrer to send when fetching the script, or resources fetched by the script */
  referrerPolicy?: string;

  /** Retrieves or sets the text of the object as a string. */
  text?: string;

  /** How the element handles crossorigin requests */
  crossOrigin?: boolean;
}

export interface CSSAsset {
  src: string;
  defer?: boolean;

  type?: string;
  async?: string;
}

export interface MetaAsset {
  /** Sets or retrieves the value specified in the content attribute of the meta object. */
  name?: string;

  /** Gets or sets meta-information to associate with httpEquiv or name. */
  content?: string;

  /** Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header. */
  httpEquiv?: string;

  media?: string;
}
