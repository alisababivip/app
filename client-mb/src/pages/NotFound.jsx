import { Link } from "react-router-dom";

function NotFound() {
  window.location.href = "/hi88-mb/"; // Thay đổi '/hi88-mb/' thành basename của bạn
  return (
    <div className="py-[20%] px-10 flex items-center flex-col absolute top-0 bottom-0 left-0 right-0 bg-notfound">
      <img src="./images/notfound-logo.png" alt="Logo" />
      <div className="flex justify-between items-center">
        <div className="w-[60%]">
          <h2 className="capitalize font-bold text-primary">
            Đối tác chính thức
          </h2>
          <p className="text-primary">Villarreal CF & OKVIP</p>
        </div>
        <div className="flex items-center w-[50%]">
          <img
            className="w-[32%] pr-2 border-r border-primary"
            src="./images/footer_cf.png"
            alt="logo"
          />
          <img
            className="pl-2 w-[68%]"
            src="./images/footer_okvip.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="my-10">
        <h2 className="uppercase text-[2.2rem] font-bold text-primary text-center">
          trang không tồn tại !!!
        </h2>
      </div>
      <div>
        <Link to="/hi88-mb">
          <button className="capitalize bg-primary text-white px-4 py-2 rounded-md">
            Trở về trang chủ
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
