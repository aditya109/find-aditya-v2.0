export const Alert = (msg) => {
  return (
    <>
      <div>
        <div class="notify">
          <span id="notifyType" class="">
            {msg}
          </span>
        </div>
        <button>Ok</button>
      </div>
    </>
  );
};
