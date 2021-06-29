Page({
    data: {
        items: [
            {
                dot: true,
                text: '',
                isWrap: true,
                intro: 'Dot Badge',
            },
            {
                dot: false,
                text: 1,
                isWrap: true,
                intro: 'Text Badge',
            },
            {
                dot: false,
                text: 99,
                isWrap: false,
                intro: 'Dot only',
            },
            {
                dot: false,
                text: 100,
                overflowCount: 99,
                isWrap: false,
                intro: 'overflowCount',
            },
            {
                dot: false,
                text: 'new',
                isWrap: false,
                intro: 'with arrow',
            },
            {
                dot: false,
                text: '22222222222222',
                isWrap: false,
                intro: 'with text',
                withArrow: true,
                direction: 'middle',
            },
            {
                dot: false,
                text: 'left arrow',
                isWrap: false,
                intro: 'Left item',
                withArrow: true,
                direction: 'left',
            },
            {
                dot: false,
                text: 'right arrow',
                isWrap: false,
                intro: 'Righ arrow',
                withArrow: true,
                direction: 'right',
            },
        ],
    },
});

