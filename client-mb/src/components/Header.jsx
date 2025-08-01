import { Button, Drawer, Menu } from "antd";
import {
  BookFilled,
  HomeFilled,
  MenuOutlined,
  MoneyCollectFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // Sử dụng useState để lưu trữ thời gian hiện tại
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Sử dụng useEffect để cập nhật thời gian liên tục
  useEffect(() => {
    // Tạo một interval để cập nhật thời gian mỗi giây
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Xóa interval khi component unmount để tránh memory leaks
    return () => {
      clearInterval(interval);
    };
  }, []);
  // Lấy thứ, ngày, tháng, năm và thời gian từ currentDateTime
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDateTime = currentDateTime.toLocaleDateString(
    "vi-VN",
    options
  );

  let isInline = true;
  return (
    <div>
      <div className="bg-[#F5F4F2] fixed top-0 left-0 z-50 w-full h-[48px] flex justify-between items-center px-2">
        <Button
          className="shadow-none outline-0 outline-none border-0 text-primary text-[25px] h-full flex items-center"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>
        <Drawer
          headerStyle={{
            backgroundColor: "#0278DC",
            display: "flex",
            alignItems: "center",
            height: "7vh",
            border: 0,
          }}
          closeIcon={
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: "50%",
                color: "#0278DC",
                width: "25px",
                height: "25px",
              }}
            >
              X
            </span>
          }
          bodyStyle={{
            padding: 0,
            height: "100%",
            background: "#02A9DD",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
          width="60%"
          onClose={onClose}
          open={open}
          placement="left"
        >
          <div className="text-center capitalize bg-[#0278DC] text-white text-[0.75rem] pb-2 font-[400]">
            <p>{formattedDateTime}</p>
          </div>
          <Menu
            className="bg-primary text-white font-[400]"
            mode={isInline ? "inline" : "horizontal"}
            items={[
              {
                key: "home",
                label: (
                  <div>
                    <HomeFilled
                      className="w-8"
                      style={{ fontSize: "1.2rem" }}
                    />
                    <a href="/hi88-mb/f">trang chủ</a>
                  </div>
                ),
              },
              {
                key: "discount",
                label: (
                  <div>
                    <MoneyCollectFilled
                      className="w-8"
                      style={{ fontSize: "1.2rem" }}
                    />
                    <a href="/hi88-mb/a">kênh khuyến mãi</a>
                  </div>
                ),
              },
              {
                key: "guideNew",
                label: (
                  <div>
                    <BookFilled
                      className="w-8"
                      style={{ fontSize: "1.2rem" }}
                    />
                    <a href="/">hướng dẫn người mới</a>
                  </div>
                ),
              },
              {
                key: "guide",
                label: (
                  <div>
                    <QuestionCircleFilled
                      className="w-8"
                      style={{ fontSize: "1.2rem" }}
                    />
                    <a href="/">hướng dẫn nạp rút</a>
                  </div>
                ),
              },
            ]}
          />
        </Drawer>
        <div className="text-center h-full flex items-center">
          <Link className="h-[100%]" to="/">
            <img className="h-[100%]" src="./images/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="w-[30px] px-8 pl-[1rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.062"
            height="31.348"
            viewBox="0 0 22.062 31.348"
          >
            <g id="组_8" data-name="组 8" transform="translate(-397.692 -9.45)">
              <g
                id="组_6"
                data-name="组 6"
                transform="translate(243.216 -257.678)"
              >
                <path
                  id="联合_1"
                  data-name="联合 1"
                  d="M3.065,27.092A3.052,3.052,0,0,1,0,24.06V3.032A3.052,3.052,0,0,1,3.065,0h11.4A3.052,3.052,0,0,1,17.53,3.032V24.06a3.052,3.052,0,0,1-3.065,3.032ZM1.108,24.06A1.949,1.949,0,0,0,3.065,26h11.4a1.949,1.949,0,0,0,1.958-1.936V20.283H1.108Zm0-21.028V18.925H16.422V3.032A1.949,1.949,0,0,0,14.465,1.1H3.065A1.949,1.949,0,0,0,1.108,3.032Zm6.384,20.21a1.273,1.273,0,1,1,1.273,1.273A1.273,1.273,0,0,1,7.492,23.242Zm4.329-9.95V8.7H13.31a5.442,5.442,0,0,1,1.1.068,1.2,1.2,0,0,1,.662.45,1.426,1.426,0,0,1,.267.895,1.509,1.509,0,0,1-.154.712,1.265,1.265,0,0,1-.39.453,1.343,1.343,0,0,1-.481.218,5.26,5.26,0,0,1-.963.066h-.605v1.733Zm.927-2.514h.508a2.408,2.408,0,0,0,.733-.072.617.617,0,0,0,.29-.226.623.623,0,0,0,.1-.357.6.6,0,0,0-.147-.414.641.641,0,0,0-.374-.2,4.568,4.568,0,0,0-.667-.031h-.448Zm-5.21,2.514V8.7h1.49a5.442,5.442,0,0,1,1.1.068,1.2,1.2,0,0,1,.661.45,1.423,1.423,0,0,1,.267.895,1.5,1.5,0,0,1-.154.712,1.269,1.269,0,0,1-.39.453,1.347,1.347,0,0,1-.481.218,5.264,5.264,0,0,1-.963.066h-.6v1.733Zm.928-2.514h.508a2.4,2.4,0,0,0,.733-.072A.615.615,0,0,0,10,10.48a.623.623,0,0,0,.1-.357.591.591,0,0,0-.147-.414.638.638,0,0,0-.373-.2,4.563,4.563,0,0,0-.667-.031H8.467Zm-2.43,2.514-.4-1.043H3.8L3.42,13.292H2.435L4.225,8.7h.981l1.84,4.595ZM4.084,11.474H5.338L4.7,9.769Zm2.124-7.79V2.637h5.113V3.684Z"
                  transform="translate(154.976 270.884)"
                  fill="#0278dc"
                  stroke="rgba(0,0,0,0)"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                />
              </g>
              <g
                id="组_7"
                data-name="组 7"
                transform="translate(225.666 -372.849)"
              >
                <circle
                  id="椭圆_2"
                  data-name="椭圆 2"
                  cx="4.652"
                  cy="4.652"
                  r="4.652"
                  transform="translate(184.784 382.299)"
                  fill="#ce0c16"
                />
                <g
                  id="组_4"
                  data-name="组 4"
                  transform="translate(186.422 384.06)"
                  opacity="0.99"
                >
                  <g id="组_3" data-name="组 3">
                    <path
                      id="路径_5"
                      data-name="路径 5"
                      d="M188.185,390.013a.724.724,0,0,1-.43-.139.807.807,0,0,1-.291-.825l.146-.851a.583.583,0,0,0-.125-.387l-.619-.6a.769.769,0,0,1,.445-1.368l.854-.124a.583.583,0,0,0,.328-.239l.383-.775a.784.784,0,0,1,1.439,0l.382.775a.58.58,0,0,0,.328.239l.855.124a.769.769,0,0,1,.444,1.368l-.619.6a.583.583,0,0,0-.125.387l.146.851a.769.769,0,0,1-1.163.846l-.764-.4a.573.573,0,0,0-.407,0l-.765.4A.951.951,0,0,1,188.185,390.013Zm1.41-1.651a1.546,1.546,0,0,1,.713.164l.241.126-.047-.268a1.639,1.639,0,0,1,.44-1.354l.2-.191-.27-.039a1.643,1.643,0,0,1-1.152-.836l-.12-.245-.121.244a1.64,1.64,0,0,1-1.152.837l-.269.039.194.19a1.642,1.642,0,0,1,.44,1.355l-.046.268.241-.127A1.546,1.546,0,0,1,189.594,388.361Z"
                      transform="translate(-186.581 -384.231)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
