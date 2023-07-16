import React from "react";
const TextWave = (): JSX.Element => {
  const maintext = "TEST WAVY WORDS TO SEE IT WIGGLES PROPERLY";
  const chars = maintext.split("");
  return (
    <div>
      <h2 className="flex items-center justify-center bg-transparent min-w-100vh relative tracking-widest">
        {chars.map((char, i) => (
          <span
            key={i}
            className="animate-custom-bounce"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default TextWave;

// ======================= old code ===================//
//   const textAnim = keyframes`
//     0% {
//       transform: translateY(0);
//     }
//     100% {
//       transform: translateY(-80px);
//     }
//   `;

//   const Span = styled.span<{ $i: number }>`
//   display: inline-block;
//   text-shadow: 10px 10px 15px #000000;
//   animation: ${textAnim} 2s ease-in-out infinite alternate;
//   animation-delay: ${(props) => `calc(0.4s * ${props.$i})`};
// `;
// =========================================================
// const text = document.querySelector('.text');
// if (text && text.textContent) {
//   text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
// ==================================================================

{
  /* <Span {...{'$i': 1}}>D</Span>
      <Span {...{'$i': 1}}>E</Span>
      <Span {...{'$i': 1}}>V</Span>
      <Span {...{'$i': 1}}>E</Span>
      <Span {...{'$i': 1}}>L</Span>
      <Span {...{'$i': 1}}>O</Span>
      <Span {...{'$i': 1}}>P</Span>
      <Span {...{'$i': 1}}>E</Span>
      <Span {...{'$i': 1}}>R</Span>
      <Span {...{'$i': 1}}>-</Span>
      <Span {...{'$i': 1}}>H</Span>
      <Span {...{'$i': 1}}>U</Span>
      <Span {...{'$i': 1}}>B</Span> */
}
