package dagong.dagongspring;

import dagong.dagongspring.domain.entity.Question;
import dagong.dagongspring.service.QuestionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;

@SpringBootTest
class DagongSpringApplicationTests {

	@Autowired
	private QuestionService questionService;

	@Test
	void testJpa() {
		Question q1 = new Question();
		q1.setSubject("sbb가 무엇인가요?");
		q1.setContent("sbb에 대해서 알고 싶습니다.");
		q1.setCreateDate(LocalDateTime.now());
		this.questionService.save(q1);  // 첫번째 질문 저장
	}
}
