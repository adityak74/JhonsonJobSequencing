function check_input()
{
document.getElementById('noofjobs').onkeydown = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if ( isNaN( String.fromCharCode(key) ) ) return false;
}
}

function gen_jobs_input()
{
var jobs = document.getElementById("noofjobs").value;
var jobs_ip_div = document.getElementById("jobs_input_div");
var br = document.createElement("br");

if (jobs!=null) {

   for (j=0;j<2;j++) {
   var mach = document.createElement("h2");
   var mach_num = document.createTextNode("Machine : " + (j+1) );
   jobs_ip_div.appendChild(mach_num);
   var br = document.createElement("br");
   jobs_ip_div.appendChild(br);
	for(i=0;i<jobs;i++)
   {
	var jobs_ip = document.createElement("input");
	var job_disp = document.createElement("h3");
	var job_no_disp = document.createTextNode("Enter Value for Job " + (i+1) + " : " );
	jobs_ip.id = 'job_no_' + (j+1) + '_' + (i+1);
	jobs_ip_div.appendChild(job_no_disp);
	jobs_ip_div.appendChild(jobs_ip);
	var br = document.createElement("br");
	jobs_ip_div.appendChild(br);
	var br = document.createElement("br");
   jobs_ip_div.appendChild(br);
   }

   }

   var rb = document.getElementById("read_jobs");
   rb.style.visibility = "visible";
}
}

var ip_a = [],ip_a1 = [],seq_a = [];
var ip_b = [],ip_b1 = [],seq_b = [];
var mostmin;
var apos,bpos;
var sequence = [];
var seqp_a,seqp_b,seq_b_in = [];

function read_inputs() {
		var jobs = document.getElementById("noofjobs").value;
		var op2  = document.getElementById("output_area_2");
		ip_a = [];
		ip_b = [];
		for(i=0;i<jobs;i++)
		{
			var ip = document.getElementById("job_no_1_" + (i+1));
			ip_a.push(ip.value);
			ip_a1.push(ip.value);
		}
		for(i=0;i<jobs;i++)
		{
			var ip = document.getElementById("job_no_2_" + (i+1));
			ip_b.push(ip.value);
			ip_b1.push(ip.value);
		}
		
          	var sp=0;
		seqp_a = 0; seqp_b = jobs-1;		
		var str = "";
          for(k=0;k<jobs;k++)
	  {
          mostmin = Math.min(Math.min.apply(null,ip_a),Math.min.apply(null,ip_b));
	  
	  for (i=0;i<jobs;i++) {
	  		if (ip_a[i]==mostmin) {
	  			apos = i;
	  			break;
	  		}
	  		else {
	  			apos = -1;
	  		}
	  }

	  if(apos==-1)
	  {
	  for (i=0;i<jobs;i++) {
	  		if (ip_b[i]==mostmin) {
	  			bpos = i;
	  			break;
	  		}
	  		else {
	  			bpos = -1;
	  		}
	  }
	  }
	  
	  if (apos!=-1) {
	  			
	  			sequence[seqp_a] = (apos+1);
				ip_a[apos] = 999;
				ip_b[apos] = 999;
				seqp_a++;
				
          }
          else if (bpos != -1) {
     			
     			sequence[seqp_b] = (bpos+1);
			ip_a[bpos] = 999;
			ip_b[bpos] = 999;
			seqp_b--;
			
          }
	  
	}

	for(k=0;k<jobs;k++)
	{
		seq_a[k] = ip_a1[sequence[k] - 1];
		seq_b[k] = ip_b1[sequence[k] - 1];
	}
	
	var test = document.getElementById("test");
	var a_out = [],b_out = [],b_out_temp=0,a_out_temp=0;
	seq_b_in[0] = seq_a[0];
	a_out.push(ip_a1[0]);
	b_out.push(parseInt(ip_a1[0],10)+parseInt(ip_b1[0],10));
	for(k=1;k<jobs;k++)
	{
		a_out_temp = parseInt(seq_a[k],10)+parseInt(a_out[k-1],10);
		a_out.push(a_out_temp);
	}
	for(k=1;k<jobs;k++)
	{
		if(b_out[k-1]<a_out[k])
		{
			seq_b_in[k] = a_out[k];
			b_out.push(parseInt(a_out[k],10)+parseInt(seq_b[k],10));
		}
		else
		{
			seq_b_in[k] = b_out[k-1];
			b_out.push(parseInt(seq_b_in[k],10)+parseInt(seq_b[k],10));
		}
	}
	var idle_a = b_out[jobs-1] - a_out[jobs-1];
	var idle_b = a_out[0];
	var total = b_out[jobs-1];

	for(k=1;k<jobs;k++)
	{
		idle_b = parseInt(idle_b,10) + parseInt(parseInt(seq_b_in[k],10) - parseInt(b_out[k-1],10),10);
	}	
	
	test.innerHTML = "<br>Machine 1 Idle Time = " + idle_a + "<br>Machine 2 Idle Time = " + idle_b + "<br>Total Time Elapsed = " + total + "<br>Machine 1 Out = " + a_out + "<br>Machine 2 in = " + seq_b_in +  "<br>Machine 2 Out = " + b_out + "<br>Job Sequence = " + sequence;
        window.location.hash = '#test';
       var table = document.getElementById('op_table');
       table.style.visibility = 'visible';
       for(k=0;k<jobs;k++)
       {
                 var row = table.insertRow(k+1);
                 var cell1 = row.insertCell(0);
                 var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = a_out[k];
                cell2.innerHTML =  seq_b_in[k];
                cell3.innerHTML =  b_out[k];
       }
}
