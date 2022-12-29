let pointArr = [new Point("Giải tích", 2, 10, 8, 8, 8.4, "A"),
    new Point("Điện quang", 3, 7, 8, 6, 6.6, "B"),
    new Point("Cơ sở văn hóa Việt Nam", 3, 10, 7, 8, 8.2, "A"),
    new Point("Hệ thống động vật học có xương sống", 3, 8, 9, 8.5, 8.5, "A")];

function showPoint() {
    let str = "";
    let sum = 0;
    let sumcredits = 0;
    let avg = 0;
    let count=0;
    let table;
    table="<table id='table2' >"
    for (let i = 0; i < pointArr.length; i++) {
        if(pointArr[i].numcredits=='' || pointArr[i].test=='' || pointArr[i].midterm=='' || pointArr[i].endterm=='') {
            pointArr[i]=''
        }
        if(pointArr[i].numcredits>0 && pointArr[i].avg1<4){
            count++
        }
        str += table +"<tr bgcolor='#98fb98'>" + "<td width=5%>"+ Number(i+1) + "</td>"
            + "<td id='name1'>" + pointArr[i].name + "</td>"
            + "<td width=10%>" + pointArr[i].numcredits + "</td>"
            + "<td width=10%>" + pointArr[i].test + "</td>"
            + "<td width=10%>" + pointArr[i].midterm + "</td>"
            + "<td width=10%>" + pointArr[i].endterm + "</td>"
            + "<td width=10%>" + pointArr[i].avg1 + "</td>"
            + "<td width=10%>" + pointArr[i].rating + "</td>"
            + "<td width=8%>"+" <button onclick='edit(" + i + ")'>Sửa</button>"
            + "<button onclick='del(" + i + ")'>Xóa</button>"+ "</td>"+"</tr>"
        sumcredits += +pointArr[i].numcredits
        sum += pointArr[i].avg1*pointArr[i].numcredits;
        avg = sum/sumcredits;
        document.getElementById("output4").innerHTML = "Có: " + count + " môn phải học lại"
    }
    document.getElementById("output").innerHTML = str;
    document.getElementById("output1").innerHTML = "Số tín chỉ đã học: " + Number(sumcredits) + "/124";
    document.getElementById("output2").innerHTML="Trung bình chung: " +avg.toFixed(2);
    if (sumcredits<=0) {
        document.getElementById("output3").innerHTML = "Xếp loại học lực:"
    }
    else {
        if (avg >= 9) {
            document.getElementById("output3").innerHTML = "Xếp loại học lực: Xuất sắc"
        } else if (avg >= 8) {
            document.getElementById("output3").innerHTML = "Xếp loại học lực: Giỏi"
        } else if (avg >= 6) {
            document.getElementById("output3").innerHTML = "Xếp loại học lực: Khá"
        } else if (avg >= 5) {
            document.getElementById("output3").innerHTML = "Xếp loại học lực: Trung bình"
        } else {
            document.getElementById("output3").innerHTML = "Xếp loại học lực: yếu"
        }
    }
}
function add() {
    let name = document.getElementById("name").value;
    let numcredits = document.getElementById("numcredits").value;
    let test = document.getElementById("test").value;
    let midterm = document.getElementById("midterm").value;
    let endterm = document.getElementById("endterm").value;
    let avg1 = (test*2 + midterm*2 + endterm*6)/10;
    let rating="" ;
    if(numcredits>0 && avg1>=9) {
        rating = "A+"
    } else if(numcredits>0 && avg1>=8) {
        rating = "A"
    } else if (numcredits>0 && avg1>=7.5) {
        rating = "B+"
    } else if (numcredits>0 && avg1>=6.5) {
        rating = "B"
    } else if (numcredits>0 && avg1>=6) {
        rating = "C+"
    } else if (numcredits>0 && avg1>=5) {
        rating = "C"
    } else if (numcredits>0 && avg1>=4) {
        rating = "D"
    } else if (numcredits>0 && avg1<4) {
        rating = "F"
    }
    let newPoin = new Point(name ,numcredits, test, midterm, endterm, avg1, rating);
    pointArr.push(newPoin);
    showPoint();
}

function edit(index) {
    let name = document.getElementById("name").value;
    let numcredits = document.getElementById("numcredits").value;
    let test = document.getElementById("test").value;
    let midterm = document.getElementById("midterm").value;
    let endterm = document.getElementById("endterm").value;
    let avg1 = (test*2 + midterm*2 + endterm*6)/10;
    let rating="";
    if(numcredits>0 && avg1>=9) {
        rating = "A+"
    } else if(numcredits>0 && avg1>=8) {
        rating = "A"
    } else if (numcredits>0 && avg1>=7.5) {
        rating = "B+"
    } else if (numcredits>0 && avg1>=6.5) {
        rating = "B"
    } else if (numcredits>0 && avg1>=6) {
        rating = "C+"
    } else if (numcredits>0 && avg1>=5) {
        rating = "C"
    } else if (numcredits>0 && avg1>=4) {
        rating = "D"
    } else if (numcredits>0 && avg1<4) {
        rating = "F"
    }
    let newPoin = new Point(name ,numcredits, test, midterm, endterm, avg1, rating);
    pointArr[index] = newPoin;
    showPoint();
}

function del(index) {
    pointArr.splice(index, 1);
    showPoint();
}
showPoint();