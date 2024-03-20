/* eslint-disable @next/next/no-img-element */

import { cn } from "@/utils/cn";

interface BannerProps {
  variant?: "live" | "coming-soon";
  banner: {
    image: string;
    title: string;
    year: string;
  };
}

export const Banner = ({ banner, variant = "live" }: BannerProps) => {
  if (variant === "live") {
    return <LiveBanner banner={banner} />;
  }
  if (variant === "coming-soon") {
    return <ComingSoonBanner banner={banner} />;
  }
  return null;
};

export const LiveBanner = ({ banner }: Omit<BannerProps, "variant">) => {
  return (
    <div className="group relative">
      <BannerDisplay mode="dark" banner={banner} />
      <BannerDisplay
        mode="light"
        banner={banner}
        className="absolute inset-0 [clip-path:inset(50%_0%);] group-hover:[clip-path:inset(0%);] transition-all duration-500 ease-in-out"
      />
    </div>
  );
};

const ComingSoonBanner = ({ banner }: Omit<BannerProps, "variant">) => {
  return (
    <div className="group relative">
      <ComingSoonInfiniteScroll />
      <BannerDisplay variant="coming-soon" mode="dark" banner={banner} />
    </div>
  );
};

interface BannerDisplayProps extends BannerProps {
  mode: "dark" | "light";
  className?: string;
}

const BannerDisplay = ({
  mode,
  banner,
  className,
  variant = "live",
}: BannerDisplayProps) => {
  const { image, title, year } = banner;
  return (
    <div
      className={cn(
        "relative",
        {
          "bg-black": mode === "dark",
          "bg-white": mode === "light",
          "cursor-pointer": variant === "live",
        },
        className
      )}
    >
      <div
        className={cn(
          "group flex items-center py-3.5 mx-2 border-b-[1px] border-grey"
        )}
      >
        <img
          src={image}
          alt=""
          className="h-[max(calc(3rem),5.5vw)] aspect-square"
        />
        <h1
          className={cn(
            "font-heading text-3xl leading-none h-[max(calc(3rem),5.5vw)] ml-8",
            {
              "text-white": mode === "dark",
              "text-black": mode === "light",
            },
            { "text-grey": variant === "coming-soon" }
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "font-mono text-xs relative top-[-4px] ml-auto self-end whitespace-nowrap transition-colors duration-[450ms] md:ml-2 md:self-start",
            {
              "text-white": mode === "dark",
              "text-black": mode === "light",
            }
          )}
        >
          {year}
        </p>
        <div
          className={cn(
            "absolute right-2 h-[max(calc(3rem),5.5vw)] aspect-square overflow-hidden",
            { hidden: variant === "coming-soon" }
          )}
        >
          <ArrowRight
            mode="dark"
            className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:translate-x-full"
          />
          <ArrowRight
            aria-hidden
            mode="light"
            className="absolute inset-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"
          />
        </div>
      </div>
    </div>
  );
};

interface ArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, "mode"> {
  mode: "dark" | "light";
}

const ArrowRight = ({ className, mode, ...props }: ArrowRightProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 71 78"
      className={cn(
        "h-[100%] w-[100%]",
        {
          "fill-white": mode === "dark",
          "fill-black": mode === "light",
        },
        className
      )}
      {...props}
    >
      <path d="m31.812 0-9.874 9.93 22.217 22.11H0v13.92h44.155L21.938 68.07 31.812 78 71 39 31.812 0Z"></path>
    </svg>
  );
};

const ComingSoonInfiniteScroll = () => {
  const comingSoonRepeatedText = " -COMING SOON".repeat(100);
  return (
    <div className="bg-black p-[2px] absolute w-[200%] z-10 text-[12px] text-white overflow-hidden text-nowrap font-mono animate-[rotate-scroll_25s_linear_infinite] hidden group-hover:block">
      {comingSoonRepeatedText}
    </div>
  );
};
