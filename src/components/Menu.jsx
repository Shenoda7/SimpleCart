function Menu({ onEmpty, onAdd, onReset }) {
  return (
    <div className="flex justify-between flex-wrap gap-4">
      <div className="flex flex-col mb-5 items-center">
        <p className="mb-2">Wanna Empty Your list ?</p>
        <button onClick={onEmpty} className="btn-red">
          Empty
        </button>
      </div>

      <div className="flex flex-col mb-5 items-center">
        <p className="mb-2">Wanna Add chipsy ?</p>
        <button onClick={() => onAdd("chipsy")} className="btn">
          Add
        </button>
      </div>

      <div className="flex flex-col mb-5 items-center">
        <p className="mb-2">Wanna Add a pepsi ?</p>
        <button onClick={() => onAdd("pepsi")} className="btn">
          Add
        </button>
      </div>

      <div className="flex flex-col mb-5 items-center">
        <p className="mb-2">Wanna Add cigarets ?</p>
        <button onClick={() => onAdd("cigarets")} className="btn">
          Add
        </button>
      </div>
      <div className="flex flex-col mb-5 items-center">
        <p className="mb-2">Wanna Add baneh ?</p>
        <button onClick={() => onAdd("baneh")} className="btn">
          Add
        </button>
      </div>

      <div className="flex flex-col mb-5 items-center">
        <p className="mb-2">Wanna Restore Your list ?</p>
        <button onClick={onReset} className="btn-green !w-[110px]">
          Restore
        </button>
      </div>
    </div>
  );
}

export default Menu;
