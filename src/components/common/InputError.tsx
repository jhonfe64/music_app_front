import React from "react";

function InputError({ error }: { error?: string }) {
  return (
    <p className="text-red-400 -mt-2 mb-3 text-light text-sm flex items-center">
      <i className="pi pi-arrow-up pr-2 text-xs"></i>
      {error}
    </p>
  );
}

export default InputError;
