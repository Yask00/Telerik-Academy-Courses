function solve(args) {
    let enumName;
    let namesList = [];
    let usedValues = {};
    let sharednamesList = [], 
        sharedUsedValues = {};
    let inSharedEnum = false;
    let result = [];

    function assignValues(namesList, usedValues) {
        let currentValue = 0;

        namesList.forEach(function (item) {
            if (item.value < 0) {
                while (usedValues[currentValue]) {
                    currentValue += 1;
                }

                item.value = currentValue;
                currentValue += 1;
            }
            result.push(`${item.name} = ${item.value} :: ${item.enum};`);
        });
    }

    args.forEach(function (line) {
        line = line.trim();

        if (line === '</>') {
            if (!inSharedEnum) {
                assignValues(namesList, usedValues);
            }
        }

        else if (line[0] === '<') {
            inSharedEnum = line[1] === '@';

            enumName = line.replace(/[<>@]/g, '');
            namesList = [];
            usedValues = {};
        }

        else {
            const spl = line.split(/[=;]/g);
            const name = spl[0].trim();
            let value = -1;

            if (spl.length === 3) {
                value = +spl[1].trim();
                if (inSharedEnum) {
                    sharedUsedValues[value] = true;
                }
                else {
                    usedValues[value] = true;
                }

            }
            const item = {
                name: name,
                value: value,
                enum: enumName
            };

            if (inSharedEnum) {
                sharednamesList.push(item);
            }
            else {
                namesList.push(item);
            }
        }
    });

    assignValues(sharednamesList, sharedUsedValues);

    console.log(result.sort().join('\n'));
}


//solve([
//    '<Fruit>',
//    '  Apple;',
//    '  Banana;',
//    '  Pineapple;',
//    '</>',
//    '<Vegetable>',
//    '  Cucumber = 1;',
//    '  Cabage;',
//    '</>'
//]);

solve([
    '<@Languages>',
    '   CSharp;',
    '   JavaScript;',
    '   Haskell = 42;',
    '   Rust = 4;',
    '   CPP;',
    '</>',
    '<Result>',
    '   Failed;',
    '   Passed;',
    '   Excellence;',
    '</>',
    '<@Insects>',
    '   Ant;',
    '   Mosquito = 2;',
    '</>'
]);