function scheduleHtmlParser(html) {
  let result = []
  let courseArray = $('.timetable_con')
  for (let u = 0; u < courseArray.length; u++) {
    let re = { name: "", position: "", teacher: "", weeks: [], day: "", sections: [] }
    //课程名在span font里，星期数在courseArray上一层里，其他都在p标签里
    let p = $(courseArray[u]).find('p')

    let name = $(courseArray[u]).find('.title font').text()
    if (name) {
      re.name = name
    }

    let position = p.eq(1).text()
    if (position) {
      re.position = position
    }

    let teacher = p.eq(2).text()
    if (teacher) {
      re.teacher = teacher
    }

    let weekArray = p.eq(0).text().match(/(\d+)-*(\d*)周+/)
    let start = parseInt(weekArray[1]);
    let end = parseInt(weekArray[2]);
    if (weekArray[2] == "") {
      re.weeks.push(start)
    } else {
      for (let i = start; i < end + 1; i++) {
        re.weeks.push(i)
      }
    }

    let week = $(courseArray[u]).parent('td')[0].attribs.id
    if (week) {
      re.day = week.split('-')[0]
    }

    let sectionArray = p.eq(0).text().match(/(\d+)-(\d+)节+/);
    if (sectionArray) {
      start = parseInt(sectionArray[1]);
      end = parseInt(sectionArray[2]);

      for (let i = start; i < end + 1; i++) {
        re.sections.push(i);
      }
    }
    result.push(re)
  }
  return result
}