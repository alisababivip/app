import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Content({ tab }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://data-hi88-mb.onrender.com/data")
      .then((resp) => resp.json())
      .then((data) => {
        setData(data[tab]);
        setIsLoading(false);
      })
      .catch((error) => error.message);
  }, [tab]);

  return (
    <div>
      {data.length > 0 ? (
        <ul
          className={`bg-footer grid p-3 ${
            tab === 1
              ? "grid-cols-4 gap-2"
              : tab === 2 || tab === 5 || tab === 7 || tab === 8
              ? "grid-cols-2 gap-2"
              : tab === 3 || tab === 4 || tab === 6
              ? "grid-cols-3 gap-3 gap-x-8"
              : ""
          }`}
        >
          {data.map((item, index) =>
            tab === 1 ? (
              <li className="" key={index}>
                <Link to="/">
                  <img src={item.imgUrl} alt={item.name} />
                  <p className="uppercase bg-primary w-full rounded-b text-[0.55rem] text-white py-[3px] font-[500] pl-[3px] h-5 overflow-hidden leading-4">
                    {item.name}
                  </p>
                </Link>
              </li>
            ) : tab === 2 || tab === 5 || tab === 7 || tab === 8 ? (
              <li
                className="overflow-hidden rounded-[8px] bg-[#02A9DD] relative"
                key={index}
              >
                <Link to="/">
                  <img src={item.imgUrl} alt={item.name} />
                  <p className="font-bold px-1 rounded-tl-[10px] text-[0.7rem] text-white bg-[#0278DC] absolute bottom-0 right-0">
                    vào trò chơi
                  </p>
                </Link>
              </li>
            ) : tab === 3 || tab === 4 || tab === 6 ? (
              <li className="overflow-hidden" key={index}>
                <Link to="/">
                  <img src={item.imgUrl} alt={item.name} />
                  <p className="px-1 rounded-tl-[10px] text-[1.rem] text-black text-center capitalize">
                    {item.name}
                  </p>
                </Link>
              </li>
            ) : (
              {}
            )
          )}
        </ul>
      ) : isLoading ? (
        <div className="text-center p-10">
          <Spin size="large"></Spin>
        </div>
      ) : (
        <div className="bg-footer text-center py-10 font-bold">
          Không có dữ liệu.
        </div>
      )}
    </div>
  );
}

export default Content;
