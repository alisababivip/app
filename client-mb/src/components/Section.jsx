import { Link } from "react-router-dom";

function Section() {
  return (
    <div className="bg-[#25CCFF] h-[70px] relative flex items-center">
      <div className="w-[40%] flex justify-center">
        <div className="flex flex-col w-[65%] text-[0.8rem] uppercase">
          <Link
            className="rounded-[5px] text-center text-white border-white border-[1px] p-[2px] mb-[4px]"
            to="/#"
          >
            Đăng nhập
          </Link>
          <Link
            className="rounded-[5px] text-center text-white border-white border-[1px] p-[2px]"
            to="/#"
          >
            Đăng ký
          </Link>
        </div>
      </div>
      <div className="border-solid border-l-[25px] border-l-transparent border-r-transparent border-b-[70px] border-b-[#0278DC] absolute right-0 left-[35%] top-0 bottom-0 h-full">
        <ul className="flex absolute w-full justify-between top-[13px] px-[10px]">
          <li>
            <Link className="flex flex-col items-center" to="/#">
              <img
                className="mb-[5px]"
                src="./images/choi-thu.png"
                alt="Chơi thử"
              />
              <span className="font-[700] text-[#ff0] text-[0.54rem] uppercase">
                Chơi thử
              </span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" to="/#">
              <img
                className="mb-[5px]"
                src="./images/nhan-thuong.png"
                alt="Nhận thưởng"
              />
              <span className="font-[700] text-[#ff0] text-[0.54rem] uppercase">
                Nhận thưởng
              </span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" to="/#">
              <img
                className="mb-[5px]"
                src="./images/quan-tam.png"
                alt="Quan tâm"
              />
              <span className="font-[700] text-[#ff0] text-[0.54rem] uppercase">
                Quan tâm
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section;
