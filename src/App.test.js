import React from "react";
import { render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetchShow");

const dataShow = {
  data: {
    id: 4726,
    name: "Ding Gorgon",
    season: 1,
    number: 2,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/132/87364827.jpg",
    },
    summary:
      "Jim, Nancy and Jonathan go to Murray, and El learns about the circumstances surrounding is trapped in the Upside Down, and Joyce enlists Bob to help find him. Meanwhile,  her birth.",
    _embedded: {
      episodes: [
        {
          id: 553946,
          url:
            "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          name: "Chapter One: The Vanishing of Will Byers",
          season: 1,
          number: 1,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
          },
          summary:
            "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/553946",
            },
          },
        },
      ],
    },
  },
};

mockFetchShow.mockResolvedValueOnce(dataShow);
test("App component fetches data from API and will render correctly", async () => {
  const { getByText } = render(<App />);
  await wait();
  userEvent.click(getByText(/select a season/i));
  getByText(/season 1/i);
});
