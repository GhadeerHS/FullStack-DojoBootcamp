<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>New Question</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</head>
<body>
	<div class="jumbotron container">
		<h1><c:out value="${question.question}"/></h1>
		<h2>Tags: 
		<c:forEach items="${question.tags}" var="tag" varStatus="status">
			<button class="btn btn-info"><c:out value="${tag.subject}"/></button>
		</c:forEach>
		</h2>
		<table class="table">
			<tbody>
				<tr>
					<td>
						<table class="table">
							<thead>
								<tr>
									<td>Answers</td>
								</tr>
							</thead>
							<tbody>
							<c:forEach items="${question.answers}" var="answer">
								<tr>
									<td><c:out value="${answer.answer}"/></td>
								</tr>
							</c:forEach>
							</tbody>
						</table>
					</td>
					<td>
						<form action="/answers" method="post">
							<input type="hidden" name="id" value="${question.id}">
							<h2>Add your answer:</h2>
							<div class="form-group row">
								<label for="answer" class="col-sm-2 col-form-label">Answer:</label>
								<div class="col-sm-10">
									<textarea id="answer" name="answer" class="form-control" rows="4"></textarea>
								</div>
							</div>
							<div class="text-right">
								<input type="submit" value="Answer it!" class="btn btn-primary">
							</div>
						</form>
					</td>						
				</tr>
			</tbody>
		</table>
	</div>
</body>
</html>