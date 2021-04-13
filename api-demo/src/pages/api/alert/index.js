Page({
    onAlert() {
        my.alert({
            title: "Alert title",
            content: "Alert content",
            buttonText: "Alert Button",
            success: () => {
                console.log("Success");
            },
            fail: () => {
                console.log("Fail");
            },
            complete: () => {
                console.log("Complete");
            },
        });
    },
});
