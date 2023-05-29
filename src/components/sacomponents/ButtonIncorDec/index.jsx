import React from "react";
import PropTypes from "prop-types";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { COLORS } from "../../../themes/Color";

const ButtonIncOrDec = ({
  count,
  onPlusClick,
  onMinusClick,
  onDeleteClick,
}) => {
  return (
    <div className="flex flex-row items-center w-40 h-10 rounded-xl bg-white shadow-md border ml-4 mt-4">
      <div
        className="bg-orange-400 flex items-center h-full rounded-xl px-2.5 mr-1"
        onClick={onDeleteClick}
      >
        <AiOutlineDelete size={16} color={"#fff"} />
      </div>
      <div className="flex items-center  w-full justify-evenly">
        <AiOutlineMinus color={COLORS.orange} onClick={onMinusClick} />
        <span className="text-orange-400 rounded-2xl border-orange-400 border px-2.5 py-1 text-xs">{`${count} pcs`}</span>
        <AiOutlinePlus color={COLORS.orange} onClick={onPlusClick} />
      </div>
    </div>
  );
};

export default ButtonIncOrDec;

ButtonIncOrDec.propTypes = {
  count: PropTypes.number,
  onPlusClick: PropTypes.func,
  onMinusClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

ButtonIncOrDec.defaultProps = {
  count: 0,
  onPlusClick: "",
  onMinusClick: "",
  onDeleteClick: "",
};
