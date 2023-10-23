import React, { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import Down from "../images/icon-down.svg";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={
        darkMode
          ? "bg-VeryDarkBlue text-DesaturatedBlue py-8 h-full md:h-screen"
          : "bg-White text-DarkGrayishBlue py-8  h-full md:h-screen "
      }
    >
      <div>
        <section>
          <div className="mx-4">
            <p
              className={
                darkMode
                  ? "font-bold text-2xl text-White pt-2"
                  : "font-bold text-2xl text-VeryDarkBlue pt-2"
              }
            >
              Social Media Dashboard
            </p>
            <p
              className={
                darkMode
                  ? "font-semibold text-DesaturatedBlue pt-2"
                  : "font-semibold text-DarkGrayishBlue pt-2"
              }
            >
              Total Followers: 23,004
            </p>
          </div>
          <div className="w-[90%] h-[1px] my-3 mx-auto bg-DesaturatedBlue md:hidden"></div>
          <div className="flex justify-between md:justify-end mx-4">
            {darkMode ? (
              <p className="md:mx-2 font-bold"> Dark Mode</p>
            ) : (
              <p className="md:mx-2 font-bold"> Light Mode</p>
            )}

            {darkMode ? (
              <FaToggleOn onClick={toggleDarkMode} size="24px" />
            ) : (
              <FaToggleOff onClick={toggleDarkMode} size="24px" />
            )}
          </div>
        </section>

        <div className="md:flex ">
          {/* facebook */}

          <section
            className={
              darkMode
                ? "text-center bg-DarkDesaturatedBlue w-[80%] md:mx-4 md:h-[200px] md:pt-6  mx-auto rounded-md my-4 border-t-4  border-Facebook"
                : "text-center bg-LightGrayishBlue w-[80%] md:mx-4 md:h-[200px] md:pt-6 mx-auto rounded-md my-4 border-t-4  border-Facebook"
            }
          >
            <div className="flex justify-center my-2">
              <img src={Facebook} alt="facebookImage" className="rounded-sm" />
              <p className="mx-2 font-semibold ">@nathanf</p>
            </div>
            <p
              className={
                darkMode
                  ? "text-4xl font-bold text-White md:pt-3"
                  : "text-4xl font-bold text-VeryDarkBlueLight  md:pt-3"
              }
            >
              1987
            </p>
            <p className="uppercase tracking-wider text-sm">Followers</p>
            <div className="flex justify-center py-2 text-LimeGreen font-semibold">
              <img src={up} alt="up" className="h-[5px] mt-[9px]" />
              <p className="mx-2">12 Today</p>
            </div>
          </section>

          {/* twitter */}

          <section
            className={
              darkMode
                ? "text-center bg-DarkDesaturatedBlue w-[80%] md:h-[200px] md:pt-6 md:mx-4 mx-auto rounded-md my-4 border-t-4  border-Twitter"
                : "text-center bg-LightGrayishBlue w-[80%] md:h-[200px] md:pt-6 md:mx-4 mx-auto rounded-md my-4 border-t-4  border-Twitter"
            }
          >
            <div className="flex justify-center my-2">
              <img src={Twitter} alt="TwitterImage" className="rounded-sm" />
              <p className="mx-2 font-semibold">@nathanf</p>
            </div>
            <p
              className={
                darkMode
                  ? "text-4xl font-bold text-White md:pt-3"
                  : "text-4xl font-bold text-VeryDarkBlueLight md:pt-3"
              }
            >
              1044
            </p>
            <p className="uppercase tracking-wider text-sm">Followers</p>
            <div className="flex justify-center py-2 text-LimeGreen font-semibold">
              <img src={up} alt="up" className="h-[5px] mt-[9px]" />
              <p className="mx-2">99 Today</p>
            </div>
          </section>

          {/* instagram */}

          <section
            className={
              darkMode
                ? "text-center bg-DarkDesaturatedBlue w-[80%] md:h-[200px] md:pt-6 md:mx-4 mx-auto rounded-md my-4 border-t-4  border-Instagram"
                : "text-center bg-LightGrayishBlue w-[80%] md:h-[200px] md:pt-6 md:mx-4 mx-auto rounded-md my-4 border-t-4  border-Instagram"
            }
          >
            <div className="flex justify-center my-2">
              <img
                src={Instagram}
                alt="InstagramImage"
                className="rounded-sm"
              />
              <p className="mx-2 font-semibold">@realnathanf</p>
            </div>
            <p
              className={
                darkMode
                  ? "text-4xl font-bold text-White md:pt-3"
                  : "text-4xl font-bold text-VeryDarkBlueLight md:pt-3"
              }
            >
              11K
            </p>
            <p className="uppercase tracking-wider text-sm">Followers</p>
            <div className="flex justify-center py-2 text-LimeGreen font-semibold">
              <img src={up} alt="up" className="h-[5px] mt-[9px]" />
              <p className="mx-2">1099 Today</p>
            </div>
          </section>

          {/* youtube */}

          <section
            className={
              darkMode
                ? "text-center bg-DarkDesaturatedBlue w-[80%]  md:h-[200px] md:pt-6 md:mx-4 mx-auto rounded-md my-4 border-t-4  border-YouTube"
                : "text-center bg-LightGrayishBlue w-[80%] md:h-[200px] md:pt-6 md:mx-4 mx-auto rounded-md my-4 border-t-4  border-YouTube"
            }
          >
            <div className="flex justify-center my-2">
              <img src={Youtube} alt="YoutubeImage" className="rounded-sm" />
              <p className="mx-2 font-semibold"> Nathan F.</p>
            </div>
            <p
              className={
                darkMode
                  ? "text-4xl font-bold text-White  md:pt-3"
                  : "text-4xl font-bold text-VeryDarkBlueLight  md:pt-3"
              }
            >
              8239
            </p>
            <p className="uppercase tracking-wider text-sm"> Subscribers</p>
            <div className="flex justify-center py-2 text-BrightRed font-semibold">
              <img src={Down} alt="Down" className="h-[5px] mt-[9px]" />
              <p className="mx-2"> 144 Today</p>
            </div>
          </section>
        </div>
      </div>

      {/* overview */}
      <div>
        <p
          className={
            darkMode
              ? "font-bold  text-White pt-2 mx-4"
              : "font-bold  text-VeryDarkBlue pt-2 mx-4"
          }
        >
          Overview - Today
        </p>
        <div class="md:grid grid-cols-4 grid-rows-2 gap-2 ">
          {/* page views */}
          <div
            className={
              darkMode
                ? " bg-DarkDesaturatedBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
                : " bg-LightGrayishBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
            }
          >
            <section className="flex justify-between mx-4 pt-3">
              <p> Page Views</p>
              <img src={Facebook} alt="facebookLogo" className="rounded-sm" />
            </section>
            <section className="flex justify-between mx-4 my-3 py-3">
              <p
                className={
                  darkMode
                    ? "text-2xl font-bold text-White "
                    : "text-2xl font-bold text-VeryDarkBlueLight "
                }
              >
                87
              </p>
              <div className="flex mr-[-10px]">
                <img src={up} alt="Up" className="h-[5px] mt-[9px]" />
                <p className="mx-2 text-LimeGreen">3%</p>
              </div>
            </section>
          </div>
          {/* like  facebook*/}
          <div
            className={
              darkMode
                ? " bg-DarkDesaturatedBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
                : " bg-LightGrayishBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
            }
          >
            <section className="flex justify-between mx-4 pt-3">
              <p> Likes</p>
              <img src={Facebook} alt="facebookLogo" className="rounded-sm" />
            </section>
            <section className="flex justify-between mx-4 my-3 py-3">
              <p
                className={
                  darkMode
                    ? "text-2xl font-bold text-White "
                    : "text-2xl font-bold text-VeryDarkBlueLight "
                }
              >
                52
              </p>
              <div className="flex mr-[-10px]">
                <img src={Down} alt="down" className="h-[5px] mt-[9px]" />
                <p className="mx-2 text-BrightRed">2%</p>
              </div>
            </section>
          </div>
          {/* like instagram */}
          <div
            className={
              darkMode
                ? " bg-DarkDesaturatedBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
                : " bg-LightGrayishBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
            }
          >
            <section className="flex justify-between mx-4 pt-3">
              <p> Likes</p>
              <img src={Instagram} alt="InstagramLogo" className="rounded-sm" />
            </section>
            <section className="flex justify-between mx-4 my-3 py-3">
              <p
                className={
                  darkMode
                    ? "text-2xl font-bold text-White "
                    : "text-2xl font-bold text-VeryDarkBlueLight "
                }
              >
                5462
              </p>
              <div className="flex mr-[-10px]">
                <img src={up} alt="Up" className="h-[5px] mt-[9px]" />
                <p className="mx-2 text-LimeGreen">2257%</p>
              </div>
            </section>
          </div>
          {/* profile views instagram */}
          <div
            className={
              darkMode
                ? " bg-DarkDesaturatedBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
                : " bg-LightGrayishBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
            }
          >
            <section className="flex justify-between mx-4 pt-3">
              <p> Profile Views</p>
              <img src={Instagram} alt="InstagramLogo" className="rounded-sm" />
            </section>
            <section className="flex justify-between mx-4 my-3 py-3">
              <p
                className={
                  darkMode
                    ? "text-2xl font-bold text-White "
                    : "text-2xl font-bold text-VeryDarkBlueLight "
                }
              >
                52k
              </p>
              <div className="flex mr-[-10px]">
                <img src={up} alt="Up" className="h-[5px] mt-[9px]" />
                <p className="mx-2 text-LimeGreen"> 1375%</p>
              </div>
            </section>
          </div>
          {/* retweets */}
          <div
            className={
              darkMode
                ? " bg-DarkDesaturatedBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
                : " bg-LightGrayishBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
            }
          >
            <section className="flex justify-between mx-4 pt-3">
              <p> Retweets</p>
              <img src={Twitter} alt="TwitterLogo" className="rounded-sm" />
            </section>
            <section className="flex justify-between mx-4 my-3 py-3">
              <p
                className={
                  darkMode
                    ? "text-2xl font-bold text-White "
                    : "text-2xl font-bold text-VeryDarkBlueLight "
                }
              >
                117
              </p>
              <div className="flex mr-[-10px]">
                <img src={up} alt="Up" className="h-[5px] mt-[9px]" />
                <p className="mx-2 text-LimeGreen"> 303%</p>
              </div>
            </section>
          </div>
          {/*like twitter */}
          <div
            className={
              darkMode
                ? " bg-DarkDesaturatedBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
                : " bg-LightGrayishBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
            }
          >
            <section className="flex justify-between mx-4 pt-3">
              <p> Likes</p>
              <img src={Twitter} alt="TwitterLogo" className="rounded-sm" />
            </section>
            <section className="flex justify-between mx-4 my-3 py-3">
              <p
                className={
                  darkMode
                    ? "text-2xl font-bold text-White "
                    : "text-2xl font-bold text-VeryDarkBlueLight "
                }
              >
                507
              </p>
              <div className="flex mr-[-10px]">
                <img src={up} alt="Up" className="h-[5px] mt-[9px]" />
                <p className="mx-2 text-LimeGreen"> 553%</p>
              </div>
            </section>
          </div>
          {/*Likes youtube*/}
          <div
            className={
              darkMode
                ? " bg-DarkDesaturatedBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
                : " bg-LightGrayishBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
            }
          >
            <section className="flex justify-between mx-4 pt-3">
              <p> Retweets</p>
              <img src={Youtube} alt="YoutubeLogo" className="rounded-sm" />
            </section>
            <section className="flex justify-between mx-4 my-3 py-3">
              <p
                className={
                  darkMode
                    ? "text-2xl font-bold text-White "
                    : "text-2xl font-bold text-VeryDarkBlueLight "
                }
              >
                107
              </p>
              <div className="flex mr-[-10px]">
                <img src={Down} alt="down" className="h-[5px] mt-[9px]" />
                <p className="mx-2 text-BrightRed">19%</p>
              </div>
            </section>
          </div>
          {/* Total Views */}
          <div
            className={
              darkMode
                ? " bg-DarkDesaturatedBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
                : " bg-LightGrayishBlue w-[90%]  md:pt-6 md:mx-4 mx-auto rounded-md my-3"
            }
          >
            <section className="flex justify-between mx-4 pt-3">
              <p> Total Views</p>
              <img src={Youtube} alt="youtubeLogo" className="rounded-sm" />
            </section>
            <section className="flex justify-between mx-4 my-3 py-3">
              <p
                className={
                  darkMode
                    ? "text-2xl font-bold text-White "
                    : "text-2xl font-bold text-VeryDarkBlueLight "
                }
              >
                1407
              </p>
              <div className="flex mr-[-10px]">
                <img src={Down} alt="down" className="h-[5px] mt-[9px]" />
                <p className="mx-2 text-BrightRed"> 12%</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
