import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import pkg from "./package.json";

export default [
    {
        input: ["src/index.ts"],
        output: [
            {
                file: pkg.main,
                format: "cjs",
                exports: "named",
            },
            {
                file: pkg.module,
                format: "esm",
                exports: "named",
            },
        ],
        plugins: [
            typescript({ tsconfig: "tsconfig.json" }),
            babel({
                babelHelpers: "bundled",
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: ["babel-plugin-macros"],
                extensions: [".tsx",".ts"],
                exclude: ["node_modules/**"],
            }),
            resolve({ preferBuiltins: true }),
            commonjs(),
            json()
        ],
        external: [
            ...Object.keys(pkg.peerDependencies || {}),
        ],
    },
];
