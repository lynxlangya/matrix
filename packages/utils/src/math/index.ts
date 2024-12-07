/**
 * @packageDocumentation
 * @module Math
 * 避免桶文件：桶文件是重新导出同一包中其他文件的文件，从而为整个包创建一个入口点。
 * 虽然它们可能看起来很方便，但编译器和捆绑程序很难处理它们，并且可能很快导致性能问题。
 * 
 * 这个文件是一个桶文件，它重新导出了其他文件。
 * 
 * 🪣 桶文件潜在问题：
 * 1. 导入链条冗长
 * 当有多个桶文件嵌套时，编译器与打包器需要多次解析导出导入的链条，这会增加解析时间，导致编译和打包的性能下降。
 *
 * 2. Tree Shaking 复杂化
 * Tree Shaking 是指在构建产物中移除未使用代码的过程。
 * 当代码中存在层层嵌套的重新导出时，打包器可能很难准确判断哪些导出在最终产物中真的被使用
 * 导致 Tree Shaking 不够彻底或效率下降
 * 
 * 3. 模块分辨和优化难度
 * 编译器（如 TS 编译器）在处理类型定义和模块引用时，如果需要通过多个重导出文件才能找到真正的代码定义，就会导致模块分辨和优化的复杂度增加
 * 增加解析开销，同样影响编译性能
 * 
 * @see https://turbo.build/repo/docs/crafting-your-repository/structuring-a-repository#:~:text=Avoiding%20barrel%20files%3A%20Barrel%20files%20are%20files%20that%20re%2Dexport%20other%20files%20in%20the%20same%20package%2C%20creating%20one%20entrypoint%20for%20the%20entire%20package.%20While%20they%20might%20appear%20convenient%2C%20they%27re%20difficult%20for%20compilers%20and%20bundlers%20to%20handle%20and%20can%20quickly%20lead%20to%20performance%20problems.
 */

// export * from './add.js';
// export * from './subtract.js';
