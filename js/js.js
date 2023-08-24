// هذه الوظيفة تقوم بعرض نص متكون من متغيرين
function c(variable, index) {
    console.log(variable + ":" + index);
}

// عند تغيير قيمة المدخل "inpDate"
function inpDate(el) {
    // تمكين زر الحساب
console.log("lll")

    $("#butCalc").prop("disabled", false);
};

// عند النقر فوق زر "butCalc"
function butCalc() {
    // التحقق من أن قيمة المدخل غير فارغة
    if ($("#inpDate").val() !== "") {

        // استخراج تاريخ الميلاد من المدخل
        var birthDate = $("#inpDate").val();
        var birthDay = new Date(birthDate).getDate();
        var birthMonth = new Date(birthDate).getMonth();
        var birthYear = new Date(birthDate).getFullYear();

        // استخراج التاريخ الحالي
        var currentDate = new Date();
        var currentDay = currentDate.getDate();
        var currentMonth = currentDate.getMonth();
        var currentYear = currentDate.getFullYear();

        // حساب العمر
        var age = currentYear - birthYear;
        if (birthMonth > currentMonth || (birthDay > currentDay && birthMonth === currentMonth)) {
            age--;
        }

        // تحقق من كون السنة كبيسة
        const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        const daysInYear = isLeapYear(currentYear) ? 366 : 365;
        const daysInLastYear = isLeapYear(currentYear - 1) ? 366 : 365;
        var allDays=0

        var monthVar, dayVar;

        if (birthMonth > currentMonth || (birthMonth === currentMonth && birthDay > currentDay)) {
            // حساب الشهور والأيام في الحالة الأولى
            monthVar = 12 - (birthMonth + 1) + currentMonth + 1;
            if (birthDay !== new Date(birthYear, birthMonth+1, 0).getDate() && currentDay !== new Date(currentYear, currentMonth+1, 0).getDate()) {
                dayVar = currentDay - birthDay;
                if (currentDay < birthDay ) {
                    monthVar--;
                    dayVar = new Date(currentYear, currentMonth , 0).getDate() - birthDay + currentDay;
                }
            }
            else if(birthDay == new Date(birthYear, birthMonth+1, 0).getDate()){
                dayVar=0
                if(currentDay!=new Date(currentYear, currentMonth+1 , 0).getDate()){
                    monthVar--;
                    dayVar=currentDay
                }
               
            }
            else if(currentDay == new Date(currentYear, currentMonth+1, 0).getDate()){
                dayVar=0
                if(currentDay!=birthDay){
                    // monthVar--;
                    dayVar=currentDay-birthDay
                }
            }
        } else if (birthMonth < currentMonth || (birthMonth === currentMonth && birthDay < currentDay) || birthDay === currentDay) {
            // حساب الشهور والأيام في الحالة الثانية

            monthVar = currentMonth + 1 - (birthMonth + 1);

            if (birthDay !== new Date(birthYear, birthMonth+1, 0).getDate() && currentDay !== new Date(currentYear, currentMonth+1, 0).getDate()) {
               
                dayVar = currentDay - birthDay;

                if (currentDay < birthDay) {
                    monthVar--;
                    dayVar = new Date(currentYear, currentMonth, 0).getDate() - birthDay + currentDay;
                }
            }  else if(currentDay == new Date(currentYear, currentMonth+1, 0).getDate()){
                dayVar=0

                if(currentDay!=birthDay){
                    // monthVar--;
                    dayVar=currentDay-birthDay
                     if(currentDay<birthDay){
                        dayVar=0
                                        }
                }
               
            }else if(birthDay == new Date(birthYear, birthMonth+1, 0).getDate()){
                dayVar=0
                if(currentDay!=new Date(currentYear, currentMonth+1 , 0).getDate()){
                    monthVar--;
                    dayVar=new Date(currentYear, currentMonth , 0).getDate()- birthDay+ currentDay
                }
               
            }
            
        }

        // عرض العمر والشهور والأيام
        $("#yearAge").text(age);
        $("#monthAge").text(monthVar);
        $("#dayAge").text(dayVar);

        // حساب عدد الأيام حتى عيد الميلاد القادم
        var nextBirthM=0;
        var nextBirthDay=0;
        var nextBirthY=0;
        if(dayVar==0){
            nextBirthM=12-monthVar
        }else if(dayVar!=0){
            nextBirthM=12-monthVar-1
            nextBirthDay=new Date(currentYear, currentMonth+1, 0).getDate() - dayVar
        }
     if(nextBirthM==12){
        nextBirthM=0
        nextBirthY=1
     }
     $("#nyearAge").text(nextBirthY);
     $("#nmonthAge").text(nextBirthM);
     $("#ndayAge").text(nextBirthDay);
     for(i=0; i<nextBirthM;i++){
        allDays+=new Date(currentYear,currentMonth+2+i , 0).getDate();
    }allDays+=nextBirthDay

if(daysInYear==366 || daysInLastYear==366){
    $("#progNextB").attr("max",366)
$("#progNextB").attr("value",366-allDays)

}else{
    $("#progNextB").attr("max",365)
    $("#progNextB").attr("value",365-allDays)

}

    }
};
