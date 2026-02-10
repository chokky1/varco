import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-4xl py-10 space-y-10">
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-3xl">
          안녕하세요^0^ <br />
          <span className="text-primary">VARCO Design System</span>에 오신것을 환영합니다.
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed">
          VARCO Design System은 효율적이고 일관된 사용자 경험을 제공하기 위해 만들어진 디자인 a가이드라인 및 컴포넌트 라이브러리입니다.
          이 문서는 디자이너와 개발자가 동일한 언어로 소통하고, 제품을 빠르게 구축할 수 있도록 돕습니다.
        </p>

        {/* Placeholder for the user's image */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-muted/20 flex items-center justify-center">
          <Image
            src="/introduction.png"
            alt="VARCO Design System Banner"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>시스템 소개</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <h3>주요 원칙</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>일관성 (Consistency):</strong> 모든 제품에서 동일한 사용자 경험을 제공합니다.</li>
            <li><strong>접근성 (Accessibility):</strong> 누구나 쉽게 사용할 수 있도록 웹 접근성 표준을 준수합니다.</li>
            <li><strong>유연성 (Flexibility):</strong> 다양한 플랫폼과 디바이스에 대응할 수 있는 유연한 구조를 가집니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
