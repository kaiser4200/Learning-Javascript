const colors=
[
    {
        "color": "black",
        "category": "hue",
        "type": "primary",
        "code": {
            "rgba": [255,255,255,1],
            "hex": "#000"
        }
    },
    {
        "color": "white",
        "category": "value",
        "code": {
            "rgba": [0,0,0,1],
            "hex": "#FFF"
        }
    },
    {
        "color": "red",
        "category": "hue",
        "type": "primary",
        "code": {
            "rgba": [255,0,0,1],
            "hex": "#FF0"
        }
    },
    {
        "color": "blue",
        "category": "hue",
        "type": "primary",
        "code": {
            "rgba": [0,0,255,1],
            "hex": "#00F"
        }
    },
    {
        "color": "yellow",
        "category": "hue",
        "type": "primary",
        "code": {
            "rgba": [255,255,0,1],
            "hex": "#FF0"
        }
    },
    {
        "color": "green",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [0,255,0,1],
            "hex": "#0F0"
        }
    },
];

//Using forEach()
let colorsName = [];
    colors.forEach(function (name) {
    colorsName.push(name.color);
    });

    console.log(colorsName);




//Using map() fetch color name and rgba
    colorsName = colors.map(function (value, index, array) {
        console.log(value.color + " " +value.code.rgba);
        return value.color;
    });

    rgbColor = colors.map(value => value.code.rgba);

    // console.log(colorsName , rgbColor);



//Using filter()
    const colorType = colors.filter(color => color.type === 'primary').map(name => name.color);
    console.log(colorType);

//Using reduce()





