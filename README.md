#221215

1. 카카오맵 관련 오류 해결중(페이지 재방문시 리렌더링이 이루어지지 않음 + IP주소의 문제로 다른 지역으로 마커가 찍히는 현상)
2. JWT 리팩토링 :
   - 회원가입 후 최초 로그인 시 유지시간
     = JWT 12시간/ Cookie 1주일
     (refreshToken도 동일)
   - JWT 만료 후 남아있는 Cookie가 있을때(authJwt middleware를 거치는 경로로 이동할때)
     = 재발급(newAccessToken) : JWT-Cookies는 로그인시 발급되는 토큰과 동일한 기간동안 유지됨, refreshToken의 decoded값을 참조함.
     = refreshToken은 다시 1일간 지속되는 JWT와 함께 재발급됨. 이때 Cookie의 만료기간은 15일로 이후 접속시에도 정보제공 가능
     = refreshToken을 통해 아이디 기억하기, 혹은 자동로그인 구현 가능. 하지만 이 경우 비밀번호도 JWT에 담기게 되므로 유지 기간을 더욱 짧게 설정해야함

# 221207

todo:

1. JWT
2. 회원가입시 중복 email 체크
3. 코드 리팩토링
4. const 로그아웃= () =>
   {if (로그아웃 || 브라우저 종료)
   {session.destroy();
   localstarge.clearItem(JWT);}
   }
