import React from "react";
import PropTypes from "prop-types";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { COLORS } from "../../../themes/Color";

const ButtonIncOrDec = ({
  count,
  isExpand,
  onPlusClick,
  onMinusClick,
  onDeleteClick,
  isExpand,
}) =>
  isExpand ? (
    <div className="flex flex-row items-center w-40 h-10 rounded-xl bg-white shadow-md border">
      <div
        className="bg-orange-400 flex items-center h-full rounded-xl px-2.5 mr-1"
        onClick={onDeleteClick}
      >
        <AiOutlineDelete size={16} color={"#fff"} className="cursor-pointer" />
      </div>
      <div className="flex items-center  w-full justify-evenly">
        <AiOutlineMinus
          color={COLORS.orange}
          onClick={onMinusClick}
          className="cursor-pointer"
        />
        <span className="text-orange-400 rounded-2xl border-orange-400 border px-2.5 py-1 text-xs">{`${count} pcs`}</span>
        <AiOutlinePlus
          color={COLORS.orange}
          onClick={onPlusClick}
          className="cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <span className="text-orange-400 rounded-2xl border-orange-400 border px-3 py-1 text-xs font-medium cursor-pointer">{`${count} pcs`}</span>
  );

export default ButtonIncOrDec;

ButtonIncOrDec.propTypes = {
  count: PropTypes.number,
  onPlusClick: PropTypes.func,
  onMinusClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  isExpand: PropTypes.bool,
};

ButtonIncOrDec.defaultProps = {
  count: 0,
  onPlusClick: "",
  onMinusClick: "",
  onDeleteClick: "",
  isExpand: false,
};
