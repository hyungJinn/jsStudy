Chrome App made with VanillaJS

[JavaScript](https://haaam.notion.site/JavaScript-e817b10b047d4566b1c263e692251bb1)

## Vanilla JS

외부의 라이브러리나 프레임워크를 이용하지 않는 순수 자바스크립트를 말한다. 외부의 라이브러리나 프레임워크를 사용하지 않기 때문에, 더 빠르고 호환성이 좋고 디버그하는 시간이 줄어든다.<br />
자바스크립트의 본질을 제대로 알지 못한 상태에서 편의성만을 위해 프레임워크나 라이브러리를 활용하는 것에 대한 문제가 제기..

### What is JavaScript? A Breif History

A simple scripting language for browsers.

### The reason why we need to learn [Vanilla JS.](http://vanilla-js.com/)

Vanilla JS is the fast and light **cross platform framework** to make an amazing and powerful JavaScript App. But it is difficult to improve productivity only using **basic language**.<br />
The point that we need to learn Vanilla JS is not to keep us from relying on framework and library excessively.<br />
Whenever a framework and library what we use can be changed, so it is important to understand Vanilla JS.

<!-- 바닐라 JS는 놀랍고 강력한 자바스크립트 앱을 만들기 위한 빠르고 가벼운 크로스 플랫폼 프레임워크다. 하지만, 기본 언어만으로 높은 생산성을 달성하는 것은 쉽지 않다.

프레임워크나 라이브러리를 무조건 금지하자는 의미가 아니라, 거기에 지나치게 의존하지 말자는 것이 핵심이다.

프레임워크나 라이브러리는 언제든 바뀔 수 있으므로 바닐라 JS에 대한 이해를 중요하게 생각하는 거예요. -->

### jQuery - write less, do more.

> library based on open source

jQuery was the very powerful library. but JavaScript had something to do more like 양방향 데이터 바인딩. The library like React Angular and Vue is more powerful than jQuery.<br />
There are two reasons what people don't use that libary than before

> First of all, 바닐라 자바스크립트의 가변성이 가장 낮다.<br />
> Second, 바닐라 자바스크립트가 가장 저렴하다.

Because of the progrees of JavaSCript, jQeury 의존도가 하락하고 있다.<br />
웹 표준 API가 확장된 것 등 다양한 이유로 대부분의 기능을 자바스크립트로 구현할 수 있다.

---

### 가상 돔(Virtual DOM)을 사용하는 라이브러리의 등장.

웹페이지는 브라우저 내에서 **돔(DOM)이라는 표준 형식으로 파싱(Parsing)** 되어 표현된다. 돔은 서비스 이용자의 동작에 맞춰 움직이는 인터랙티브 웹(Interactive Web)을 구현하기 위해선 필수적입니다. 하지만 돔 조작이 많아질수록 브라우저의 성능이 낮아지는 문제가 있었고, 이를 해결하기 위한 대안으로 등장한 것이 가상 돔(Virtual DOM)입니다.

> 돔(DOM): 돔(DOM, Document Object Model)은 문서 객체 모델로, XML이나 HTML 문서에 접근하기 위한 프로그래밍 인터페이스예요. 돔은 문서 내의 요소를 정의하고, 프로그래밍 언어가 돔 구조에 접근하는 방법을 제공해요.<br/>
> 파싱(Parsing): 문서나 HTML 등의 데이터를 분해하고 분석하고, 원하는 형태로 조립한 특정 데이터만 추출하는 것을 말해요. 파싱을 수행하는 프로그램은 파서(Paser)라고 합니다.

메모리에 가상 돔을 만들고 실제 돔과 비교하며 작업한 후, 수정된 부분은 실제 돔에 적용하는 식으로 활용할 수 있어요. 브라우저의 성능과 속도 문제를 보완한다는 장점을 바탕으로, 가상 돔을 이용한 프레임워크와 라이브러리가 늘었어요. **리액트(React), 뷰(Vue.js), 앵귤러(Angular)가** 대표적이에요.

제이쿼리와 비교했을 때 가상 돔을 이용한 경우가 생산성이 훨씬 높다. 이에 자연스럽게 가상돔을 채용하는 리액트(React)나 뷰(Vue.js) 등이 새로운 대세로 떠올랐다. 가상 돔을 이용할 때 제이쿼리를 쓰면 스크립트 충돌을 발생할 수도 있어서, 되도록 바닐라 JS로 스크립트를 작성하려는 경향이 생겼다. 제이쿼리를 활용해 직접 돔을 제어하는 것보다, 상태(State)를 통해 돔을 선언적으로 제어하는 것이 코드에 대한 이해를 훨씬 쉽게 만들어주기 때문이다.

### 리액트는 무조건 바닐라 JS로 작성해야 할까요? 🤔

가상 돔을 이용할 때 제이쿼리를 쓰면 충돌이 발생한다고 표현하는 이유는 **제이쿼리와 가상 돔을 이용하는 프레임워크 및 라이브러리의 역할이 충돌하기** 때문이에요. 제이쿼리와 리액트 및 뷰 모두 돔을 갱신한다는 같은 목적을 가진 도구거든요. 리액트와 뷰 등을 다룰 때 제이쿼리를 사용할 수는 있지만, 함께 쓰는 경우는 거의 없다고 해요. 같은 목적을 가진 두 도구를 굳이 한 번에 사용할 필요는 없으니까요.

저 같은 경우에는 예전에 jQuery로 개발을 했다가 Backbone.js로 프레임워크로 전환을 했고요. 그 다음에는 Angular 1으로, 이후에는 Vue.js로 개발을 했었는데 프레임워크가 계속 바뀌기 때문에 코어라고 불리는 Vanilla JS에 대한 이해도를 특히나 프론트엔드에서 중요하게 평가를 하고 있어요."

---

### References

[NomadCoder, 프로젝트 개발 참고 사이트](https://nomadcoders.co/javascript-for-beginners/lobby)

[Marshall K - Why does people use Vanilla JS when making their blog](https://marshallku.com/web/%EC%99%9C-%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%97%90-vanilla-js%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%96%88%EB%82%98)

[인프런 셰리, Vanilla JS, 선택일까 필수일까](https://www.inflearn.com/pages/infmation-56-20221115)
