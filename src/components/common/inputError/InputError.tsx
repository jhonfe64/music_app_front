import React from "react";

function InputError({ error }: { error?: string }) {
  return (
    <p className="text-red-400 -mt-2 mb-3 text-light text-sm flex items-center">
      {error}
    </p>
  );
}

export default InputError;
