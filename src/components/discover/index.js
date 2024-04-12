import Sidebar from "../sidebar";
import { IoMdSearch } from "react-icons/io";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { TbPointFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "./index.css";
function Discover() {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };
  const navigateToBlog = () => {
    navigate("/blog");
  };
  const navigateToCareers = () => {
    navigate("/careers");
  };
  return (
    <div className="container">
      <Sidebar />
      <div className="discover-container">
        <div className="search-bar-container">
          <IoMdSearch style={{ fontSize: "1rem" }} />
          <input
            type="search"
            className="input-bar"
            placeholder="Search for Characters"
          />
        </div>
        <div className="image-container">
          <div className="discover-heading-container">
            <p className="discover-paragraph">What do you want to do?</p>
            <h2 className="discover-heading">Epic challenges await</h2>
          </div>
          <div className="character-main-container">
            <div className="character-container">
              <div className="profile-container">
                <img
                  src="https://private-user-images.githubusercontent.com/4326215/320278519-1570320e-6c21-43b5-917b-b8e5b8d534ba.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI4MjgwNjEsIm5iZiI6MTcxMjgyNzc2MSwicGF0aCI6Ii80MzI2MjE1LzMyMDI3ODUxOS0xNTcwMzIwZS02YzIxLTQzYjUtOTE3Yi1iOGU1YjhkNTM0YmEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDQxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA0MTFUMDkyOTIxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YWQ3MTU4MzFjNWZkNTViNGExYmNmMTg1MWQwZDQ4NTFjMzc0ZjY0NjgzNzJhMDk3Yjc1NDE3ZmVmNWJjODVkMCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.X1ovJ2T-t212xeFsFJ9Yrfv92dzSfnglmswVl2F8kSE"
                  alt="cartoon"
                  className="image"
                />
                <h2 className="character-name">Puzzle Prodigy</h2>
              </div>
              <div className="description-container">
                <p className="character-description">
                  Greetings! I'm Puzzle Prodigy. ready to lead you through a
                  maze of mind-boggling puzzles.....
                </p>
                <p className="character-description">Reply...</p>
              </div>
            </div>
            <div className="character-container">
              <div className="profile-container">
                <img
                  src="https://private-user-images.githubusercontent.com/4326215/320278519-1570320e-6c21-43b5-917b-b8e5b8d534ba.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI4MjgwNjEsIm5iZiI6MTcxMjgyNzc2MSwicGF0aCI6Ii80MzI2MjE1LzMyMDI3ODUxOS0xNTcwMzIwZS02YzIxLTQzYjUtOTE3Yi1iOGU1YjhkNTM0YmEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDQxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA0MTFUMDkyOTIxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YWQ3MTU4MzFjNWZkNTViNGExYmNmMTg1MWQwZDQ4NTFjMzc0ZjY0NjgzNzJhMDk3Yjc1NDE3ZmVmNWJjODVkMCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.X1ovJ2T-t212xeFsFJ9Yrfv92dzSfnglmswVl2F8kSE"
                  alt="cartoon"
                  className="image"
                />
                <h2 className="character-name">Escape Room</h2>
              </div>
              <div className="description-container">
                <p className="character-description">
                  Welcome to your next challenge Can you escape in time?
                </p>
                <p className="character-description">Reply...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="try-these-main-container">
          <h2 className="try-these-heading">Try these</h2>
          <div className="try-these-container">
            <div className="practice-container">
              <img
                src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                alt="cartoon"
                className="image"
              />
              <div className="practice-content-container">
                <h1 className="practice-heading">Practice a new language</h1>
                <p className="practice-paragraph">with HyperGlot</p>
              </div>
            </div>
            <div className="practice-container">
              <img
                src="https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/gAKz4DRFDqYfmS2_7cQNq-anu45jPPLaFZPNxjpqAGI.webp?webp=true&anim=0"
                alt="cartoon"
                className="image"
              />
              <div className="practice-content-container">
                <h1 className="practice-heading">Practice interviewing</h1>
                <p className="practice-paragraph">with Interviewer</p>
              </div>
            </div>
            <div className="practice-container">
              <img
                src="https://character.ai/chat/Hu84TYGgte3qVoQuy75x6Q1-ORjQbgoe2qaFoTkjaOM"
                alt="cartoon"
                className="image"
              />
              <div className="practice-content-container">
                <h1 className="practice-heading">Brainstorm ideas</h1>
                <p className="practice-paragraph">with Brainstomer</p>
              </div>
            </div>
            <div className="practice-container">
              <img
                src="https://characterai.io/i/80/static/avatars/uploaded/2022/11/1/8vQT3XDnPkEHhafVac-ldiQCljC3kImrE9TiEXcIjKQ.webp?webp=true&anim=0"
                alt="cartoon"
                className="image"
              />
              <div className="practice-content-container">
                <h1 className="practice-heading">Plan a trip</h1>
                <p className="practice-paragraph">with Trip planner</p>
              </div>
            </div>
            <div className="practice-container">
              <img
                src="https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0"
                alt="cartoon"
                className="image"
              />
              <div className="practice-content-container">
                <h1 className="practice-heading">Write a story</h1>
                <p className="practice-paragraph">with Creative Helper</p>
              </div>
            </div>
            <div className="practice-container">
              <img
                src="https://characterai.io/i/80/static/avatars/TextAdventure3.png?webp=true&anim=0"
                alt="cartoon"
                className="image"
              />
              <div className="practice-content-container">
                <h1 className="practice-heading">Play a game</h1>
                <p className="practice-paragraph">with Text Advanture Game</p>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-main-container">
          <h2 className="featured-heading">Featured</h2>
          <div className="featured-container">
            <div className="work-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JPYF5fRAsBC_2YZ5Au136ZyguDmAh7szke9qScieKw&s"
                alt="cartoon"
                className="square-image"
              />
              <div className="practice-content-container">
                <h2 className="practice-heading">Ganyu</h2>
                <p className="practice-paragraph">By @ShaneSparks</p>
                <p className="practice-paragraph">
                  I am the secretary to the Liyve Qixing
                </p>
                <p className="practice-paragraph">
                  <TbMessageCircle2 /> 45.5m
                </p>
              </div>
            </div>
            <div className="work-container">
              <img
                src="https://i.pinimg.com/474x/ec/68/78/ec68785dbfbb1f715cf506b2d1f9fdd8.jpg"
                alt="cartoon"
                className="square-image"
              />
              <div className="practice-content-container">
                <h2 className="practice-heading">Tomioka Giyuu</h2>
                <p className="practice-paragraph">By @green_mina0324</p>
                <p className="practice-paragraph">
                  I am Tomioka Giyuu, a water piller. If you have any further
                  questions I don't and won't...
                </p>
                <p className="practice-paragraph">
                  <TbMessageCircle2 /> 73.9mm
                </p>
              </div>
            </div>
            <div className="work-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bSqdFL29JQIwUgjprJ0cEjZEou4VteuoG6YEN6uf6g&s"
                alt="cartoon"
                className="square-image"
              />
              <div className="practice-content-container">
                <h2 className="practice-heading">Stella</h2>
                <p className="practice-paragraph">By @landon</p>
                <p className="practice-paragraph">Not "Your" AI assistant</p>
                <p className="practice-paragraph">
                  <TbMessageCircle2 /> 53.9m
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button className="fst-button">Helper</button>
          <button className="buttons">Anime Game Characters</button>
          <button className="buttons">Games</button>
          <button className="buttons">Anime</button>
          <button className="buttons">Game Characters</button>
          <button className="buttons">Comedy</button>
          <button className="buttons">VTuber</button>
          <button className="buttons">Books</button>
          <button className="buttons">Image generating</button>
          <button className="buttons">Discussion</button>
          <button className="buttons">Language Learning</button>
          <button className="buttons">History</button>
          <button className="buttons">Religion</button>
          <button className="buttons">Animals</button>
        </div>
        <div className="featured-container">
          <div className="work-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JPYF5fRAsBC_2YZ5Au136ZyguDmAh7szke9qScieKw&s"
              alt="cartoon"
              className="square-image"
            />
            <div className="practice-content-container">
              <h2 className="practice-heading">Psychologist</h2>
              <p className="practice-paragraph">By @Blazeman98</p>
              <p className="practice-paragraph">
                Someone who helps with life difficulties
              </p>
              <p className="practice-paragraph">
                <TbMessageCircle2 /> 106.1m
              </p>
              <p className="practice-paragraph">
                <AiOutlineLike /> 33.2k
              </p>
            </div>
          </div>
          <div className="work-container">
            <img
              src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg"
              alt="cartoon"
              className="square-image"
            />
            <div className="practice-content-container">
              <h2 className="practice-heading">Are-you-feeling-okay</h2>
              <p className="practice-paragraph">By @summeriscoming</p>
              <p className="practice-paragraph">
                if you're feeling bad, chat with me
              </p>
              <p className="practice-paragraph">
                <TbMessageCircle2 /> 24.1m
              </p>
              <p className="practice-paragraph">
                <AiOutlineLike /> 10.1k
              </p>
            </div>
          </div>
          <div className="work-container">
            <img
              src="https://img.freepik.com/premium-vector/heart-symbol-symbols-heart-love-vector_718526-113.jpg"
              alt="cartoon"
              className="square-image"
            />
            <div className="practice-content-container">
              <h2 className="practice-heading">Ella - Dating coach</h2>
              <p className="practice-paragraph">By @ghpkishore</p>
              <p className="practice-paragraph">Hi! I am a dating coach</p>
              <p className="practice-paragraph">
                <TbMessageCircle2 /> 13.1m
              </p>
            </div>
          </div>
        </div>
        <div className="try-saying-main-container">
          <h2 className="try-saying-heading">Try saying</h2>
          <div className="try-saying">
            <div className="try-saying-container">
              <img
                src="https://characterai.io/i/80/static/avatars/WhoWouldWin2.png?webp=true&anim=0"
                alt="cartoon"
                className="image"
              />
              <div className="details-main-container">
                <div className="details-container">
                  <h2 className="practice-heading">WhoWouldWin</h2>
                  <p className="practice-paragraph">
                    @greg <TbPointFilled /> 25.5m chats <TbPointFilled /> 6,942
                    likes
                  </p>
                </div>
                <div className="para-main-container">
                  <div className="para-container">
                    <p className="para">Batsman vs. Superman</p>
                  </div>
                  <div className="para-container">
                    <p className="para">Knight vs. Samurai</p>
                  </div>
                  <div className="para-container">
                    <p className="para">Lebron James vs. Machael Jordan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="try-saying-container">
              <img
                src="https://characterai.io/i/80/static/avatars/uploaded/2022/12/2/0cXVHLszZQ8idr8qGkhXB4-1PzA_qbAFmVl2V7v9NZc.webp?webp=true&anim=0"
                alt="cartoon"
                className="image"
              />
              <div className="details-main-container">
                <div className="details-container">
                  <h2 className="practice-heading">Elon Musk</h2>
                  <p className="practice-paragraph">
                    @elonwhishperer <TbPointFilled /> 34.9m chats{" "}
                    <TbPointFilled /> 3312 likes
                  </p>
                </div>
                <div className="para-main-container">
                  <div className="para-container">
                    <p className="para">Why did you buy Twitter?</p>
                  </div>
                  <div className="para-container">
                    <p className="para">
                      What do you think about Jeff Bezos' Blue Origin?
                    </p>
                  </div>
                  <div className="para-container">
                    <p className="para">
                      If you time travel, when/where would you go?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="routes-container">
          <p className="paragraph" onClick={navigateToAbout}>
            About
          </p>
          <p className="paragraph" onClick={navigateToCareers}>
            Careers
          </p>
          <p className="paragraph" onClick={navigateToBlog}>
            Blog
          </p>
        </div>
      </div>
    </div>
  );
}

export default Discover;
