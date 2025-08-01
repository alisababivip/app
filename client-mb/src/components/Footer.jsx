import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="p-3 pb-[12vh] bg-footer">
      <div className="flex items-center">
        <div className="w-[60%] text-primary">
          <h2 className="font-bold text-[1rem]  capitalize">
            Đối tác chính thức
          </h2>
          <p className="text-[0.9rem]">Villarreal CF & OKVIP</p>
        </div>
        <div className="w-[40%] flex justify-center items-center">
          <img
            className="w-[38%] border-r-[1px] border-r-primary pr-2"
            src="./images/footer_cf.png"
            alt="Logo CF"
          />
          <img
            className="w-[78%] px-2"
            src="./images/footer_okvip.png"
            alt="Logo OKVIP"
          />
        </div>
      </div>
      <div className="mt-6">
        <div className="flex">
          <div className="w-[42%] mr-[50px]">
            <h2 className="mb-2 text-primary text-[0.9rem] capitalize">
              Giấy phép
            </h2>
            <img src="./images/footer_license.png" alt="Giấy phép" />
          </div>
          <div className="w-[40%]">
            <h2 className="mb-2 text-primary text-[0.9rem] capitalize">
              Bảo vệ
            </h2>
            <img
              className="w-[78%]"
              src="./images/footer_protect.png"
              alt="Bảo vệ"
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-[61%] mr-[50px]">
            <h2 className="mb-2 text-primary text-[0.9rem] capitalize">
              Theo dõi chúng tôi
            </h2>
            <div className="w-[68%] flex items-center justify-between">
              <Link to="/">
                <img
                  className="w-6 h-6"
                  src="./images/footer_fb.png"
                  alt="Facebook"
                />
              </Link>
              <Link to="/">
                <img
                  className="w-6 h-6"
                  src="./images/footer_youtube.png"
                  alt="Youtube"
                />
              </Link>
              <Link to="/">
                <img
                  className="w-6 h-6"
                  src="./images/footer_telegram.png"
                  alt="Telegram"
                />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-primary text-[0.9rem] capitalize">
              chơi có trách nhiệm
            </h2>
            <img
              className="w-[78%]"
              src="./images/footer_responsible.png"
              alt="chơi có trách nhiệm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
