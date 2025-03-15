const GOOGLE_API_KEY = "AIzaSyAgoAan9-VPsJqqCh5ZCFvbqnsOxJ-WqgU";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    name: "prince",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    replies: [
      {
        name: "prince",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        replies: [
          {
            name: "prince",
            comment:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            replies: [
              {
                name: "prince",
                comment:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                replies: [
                  {
                    name: "prince",
                    comment:
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    replies: [
                      {
                        name: "prince",
                        comment:
                          "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "prince",
                    comment:
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "prince",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "kukur",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "billa",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "kukad",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    replies: [],
  },
];
