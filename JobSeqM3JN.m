clear all;
clc

disp('Jhonsons Job Sequencing for 3 Machines and N Jobs');
max_jobs = input('Input the number of jobs : ');
a = input('Enter the cost of jobs for Machine A(as an array) : ');
b = input('Enter the cost of jobs for Machine B(as an array) : ');
c = input('Enter the cost of jobs for Machine C(as an array) : ');

%Sample Input
%a=[50 150 80 200 30];
%b=[60 50 150 70 200];
%c=[10 20 40 50 60];

a_new = a + b;
b_new = b + c;

op = [];
count1 = 1;
count2 = max_jobs;

for i = 1:max_jobs

    t1 = min(a_new);
    t2 = min(b_new);
    t = min(t1,t2);
    
    if(t==t1)
        for i = 1:max_jobs
            if(t==a_new(i))
                index = i;
                break;
            end
        end
        a_new(index) = 9999;
        b_new(index) = 9999;
        op(count1) = index;
        count1 = count1 + 1;
    else
        for j = 1:5
            if(t==b_new(j))
                index = j;
                break;
            end
        end
        a_new(index) = 9999;
        b_new(index) = 9999;
        op(count2) = index;
        count2 = count2 - 1;
    end
    op
end
