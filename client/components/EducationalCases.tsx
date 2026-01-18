export default function EducationalCases() {
  return (
    <section className="w-full px-6 pb-16 md:px-12 lg:pb-24 xl:pb-32">
      {/* Section Title */}
      <div className="mx-auto mt-12 w-full max-w-[1460px] md:mt-16 lg:mt-24">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-white md:mb-16 md:text-5xl lg:mb-24 lg:text-6xl xl:text-[64px]">
          教育案例
        </h2>

        {/* Content Grid - Correct Layout */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Video Panel - Upper Blue Box */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="h-[300px] w-full overflow-hidden rounded-3xl bg-brand-blue p-6 shadow-lg md:h-[400px] lg:h-[480px] xl:h-[540px]">
              <div className="flex h-full items-center justify-center text-brand-lightblue">
                {/* Placeholder for video embed */}
                <div className="text-center">
                  <div className="mb-4 text-6xl">▶</div>
                  <p className="text-xl font-bold md:text-2xl">视频播放区域</p>
                  <p className="mt-2 text-sm opacity-75 md:text-base">
                    Video Player Area
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Information Panel - Gray Box */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="h-[300px] w-full rounded-3xl bg-brand-gray p-4 md:p-6 lg:p-8 shadow-lg md:h-[400px] lg:h-[480px] xl:h-[540px]">
              <div className="flex h-full flex-col justify-center px-4 md:px-6 lg:px-8">
                <h3 className="mb-6 text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
                  项目介绍
                </h3>
                <div className="space-y-4 text-gray-800">
                  <div className="text-xs md:text-sm lg:text-base leading-relaxed overflow-hidden">
                    <span className="block whitespace-pre-wrap break-words text-ellipsis line-clamp-6">
                      本项目基于参数化建模思想，设计并实现了一款可高度自定义的教育小车模型。小车的结构参数分为三类：Class1 为用户在网页端通过滑块或输入框直接设置的可调参数，如车身宽度、轮距等；Class2 通过内置公式自动计算，例如车身长度由整体外形尺寸与缓冲区宽度关系推导；Class3 为固定不变的结构常数，如螺栓孔径、标准零件尺寸等。所有参数均存储于 JSON 配置文件中，系统可根据参数变化实时调整各零部件的几何尺寸与装配位置，实现车身底盘、轮组、传感器支架等部件的动态生成与可视化渲染。该方法不仅提升了设计灵活性与可复用性，也为 STEM 教育、机械设计课程以及快速原型验证提供了高效工具支持。
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Modeling Embed Panel - Lower Blue Box (Full Width) */}
          <div className="lg:col-span-12">
            <div className="h-[400px] w-full overflow-hidden rounded-3xl bg-brand-blue p-6 shadow-lg md:h-[600px] lg:h-[700px] xl:h-[821px]">
              <div className="flex h-full items-center justify-center text-brand-lightblue">
                {/* Placeholder for 3D model embed */}
                <div className="text-center">
                  <div className="mb-4 text-6xl md:text-7xl lg:text-8xl">🔷</div>
                  <p className="text-xl font-bold md:text-2xl lg:text-3xl">
                    3D建模展示区域
                  </p>
                  <p className="mt-2 text-sm opacity-75 md:text-base lg:text-lg">
                    3D Modeling Display Area
                  </p>
                  <p className="mt-4 text-xs opacity-60 md:text-sm">
                    在这里嵌入您的3D建模子网站或交互式3D模型
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
