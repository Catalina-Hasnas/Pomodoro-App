import { useState } from "react";

export const Settings = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <dialog open={open} id="favDialog">
        <form>
          <p>
            <label>
              Favorite animal:
              <select>
                <option value="default">Choose…</option>
                <option>Brine shrimp</option>
                <option>Red panda</option>
                <option>Spider monkey</option>
              </select>
            </label>
          </p>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
              value="cancel"
              formMethod="dialog"
            >
              Cancel
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
              id="confirmBtn"
              value="default"
            >
              Confirm
            </button>
          </div>
        </form>
      </dialog>
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen((prevState) => !prevState);
        }}
        id="showDialog"
      >
        Show the dialog
      </button>
    </>
  );
};
