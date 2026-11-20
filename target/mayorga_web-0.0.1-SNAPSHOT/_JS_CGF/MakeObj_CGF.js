"use strict"; 

function MakeObj_CGF() {
    var container = document.createElement("div");
    container.classList.add("obj_CGF-container");

    var fish1 = MakeObj({
        speciesName: "Flying Fish",
        nickname: "Skipper",
        marketValue: 85000,
        adultImgURL: "pics/flyingfish.jpg",
        babyImgURL: "pics/baby_flyingfish.jpg"
    });
    container.appendChild(fish1);

    var fish2 = MakeObj({
        speciesName: "Spotted Handfish",
        nickname: "Spotty",
        marketValue: 120000,
        adultImgURL: "pics/spottedhandfish.jpg",
        babyImgURL: "pics/baby_spottedhandfish.jpg"
    });
    container.appendChild(fish2);

    var fish3 = MakeObj({});
    container.appendChild(fish3);

    return container;
}