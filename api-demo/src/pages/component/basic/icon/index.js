Page({
  data: {
    blocks: [
      {
        name: "Action",
        line: [
          "calendar",
          "chat",
          "checked_mark",
          "edit",
          "filter",
          "home",
          "info",
          "link",
          "location",
          "question",
          "refresh",
          "search",
          "setting",
          "share",
          "sort",
        ],
        glyph: ["edit_glyph", "info_glyph", "location_glyph", "share_glyph"],
      },
      {
        name: "Content",
        line: ["minus", "plus", "qr"],
      },
      {
        name: "Media",
        line: ["forward_10", "replay_10", "skip_next", "skip_previous"],
        glyph: [
          "pause_glyph",
          "play_glyph",
          "skip_next_glyph",
          "skip_previous_glyph",
        ],
      },
      {
        name: "Navigation",
        line: [
          "arrow_down",
          "arrow_left",
          "arrow_right",
          "arrow_up",
          "close",
          "close_circle",
          "direction_right",
          "more",
        ],
        glyph: ["close_glyph"],
      },
      {
        name: "Status",
        line: ["success", "warning"],
        glyph: ["success_glyph", "warning_glyph"],
      },
    ],
  },
});
