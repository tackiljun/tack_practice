//////////////////////////////////////////
// #Pseudo Code.

//////////////////////////////////////////
// fn isValid(expression):
//     -> create Stack
//     -> scan expression item by item:
//         -> IF "{" or "[" or "(";
//             -> push to stack
//         -> ELSE:
//             -> pop():
//                 IF matching NOT found
//                     -> return false

//     -> return length of stack