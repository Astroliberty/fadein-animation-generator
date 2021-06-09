export const keyframe = {
  normal: `@keyframes normal {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
  bounce: `@keyframes bounce {
  0% { opacity: 0; transform: scale(0.8) translateY(20px);  }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1) translateY(0px); }
}`,
  fromRight: `@keyframes fromRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0px); }
}`,
  fromLeft: `@keyframes fromLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0px); }
}`,
  fromBottom: `@keyframes fromBottom {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateX(0px); }
}`,
  fromTop: `@keyframes fromTop {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateX(0px); }
}`,
  flip: `@keyframes flip {
  from { opacity: 0; transform: rotateY(180deg); }
  to { opacity: 1; transform: rotateY(0); }
}`,
  shrink: `@keyframes shrink {
  from { opacity: 0; transform: scale(1.2); }
  to { opacity: 1; transform: scale(1); }
}`,
  zoom: `@keyframes zoom {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}`,
  ripple: `@keyframes ripple {
  0% { transform: scale(.85); opacity: 0; }
  20% { transform: scale(1.075); opacity: 1; }
  40% { transform: scale(.93); opacity: 1; }
  60% { transform: scale(1.075); opacity: 1; }
  80% { transform: scale(.93); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}`,
}

export const easing = {
  easeInSine: 'cubic-bezier(0.12, 0, 0.39, 0)',
  easeOutSine: 'cubic-bezier(0.61, 1, 0.88, 1)',
  easeInOutSine: 'cubic-bezier(0.37, 0, 0.63, 1)',
  easeInQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
  easeOutQuad: 'cubic-bezier(0.5, 1, 0.89, 1)',
  easeInOutQuad: 'cubic-bezier(0.45, 0, 0.55, 1)',
  easeInCubic: 'cubic-bezier(0.32, 0, 0.67, 0)',
  easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
  easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',
  easeInQuart: 'cubic-bezier(0.5, 0, 0.75, 0)',
  easeOutQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',
  easeInOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',
  easeInQuint: 'cubic-bezier(0.64, 0, 0.78, 0)',
  easeOutQuint: 'cubic-bezier(0.22, 1, 0.36, 1)',
  easeInOutQuint: 'cubic-bezier(0.83, 0, 0.17, 1)',
  easeInExpo: 'cubic-bezier(0.7, 0, 0.84, 0)',
  easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeInOutExpo: 'cubic-bezier(0.87, 0, 0.13, 1)',
  easeInCirc: 'cubic-bezier(0.55, 0, 1, 0.45)',
  easeOutCirc: 'cubic-bezier(0, 0.55, 0.45, 1)',
  easeInOutCirc: 'cubic-bezier(0.85, 0, 0.15, 1)',
  easeInBack: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  easeInOutBack: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
}

export const animation = [
  'normal',
  'bounce',
  'fromRight',
  'fromLeft',
  'fromBottom',
  'fromTop',
  'flip',
  'shrink',
  'zoom',
  'ripple',
]
