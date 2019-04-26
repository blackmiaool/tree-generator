module.exports = function main(data) {
    function print(arr, stack) {
        arr.forEach((node, index) => {
            const isLast = index === arr.length - 1;
            printSingle({
                node,
                isLast: index === arr.length - 1,
                stack
            });
            if (node.children) {
                if (isLast) {
                    print(node.children, [...stack, 0]);
                } else {
                    print(node.children, [...stack, 1]);
                }

            }
        });
    }

    function printSingle({
        node,
        index,
        isLast,
        stack
    }) {
        let left="";
        stack.forEach((bit) => {
            if (bit) {
                left += '│   '
            } else {
                left += '    '
            }

        });
        output+=left;
        if (isLast) {
            output += '└'
        } else {
            output += '├'
        }
        output += `── ${node.name} ${node.descr}`;
        output += '\n';
        if(isLast&&!node.children){
            output+=left;
            output += '\n';
        }
    }


    function toObject(arr, layer) {
        return arr.map(([name, descr, children]) => {
            return {
                name,
                descr,
                children: children && toObject(children, layer + 1),
                layer
            }
        });
    }

    data = toObject(data, 0);
    let output = '';
    print(data, []);
    return output;
}
