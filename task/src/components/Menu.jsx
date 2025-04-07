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
        <p className="mb-2">Wanna Add Pizza ?</p>
        <button onClick={() => onAdd("pizza")} className="btn">
          Add
        </button>
      </div>

      <div className="flex flex-col mb-5 items-center">
        <p className="mb-2">Wanna Add a Combo ?</p>
        <button onClick={() => onAdd("combo")} className="btn">
          Add
        </button>
      </div>

      <div className="flex flex-col mb-5 items-center">
        <p className="mb-2">Wanna Add Spanish Rice ?</p>
        <button onClick={() => onAdd("rice")} className="btn">
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
