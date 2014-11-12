clear all;
clc

disp('Jhonsons Job Sequencing for 2 Machines and N Jobs');
max_jobs = input('Input the number of jobs : ');
a = input('Enter the cost of jobs for Machine A(as an array) : ');
b = input('Enter the cost of jobs for Machine b(as an array) : ');

%Sample Input
%a=[50 150 80 200 30];
%b=[60 50 150 70 200];

op = [];
count1 = 1;
count2 = max_jobs;

for i = 1:max_jobs

    t1 = min(a);
    t2 = min(b);
    t = min(t1,t2);
    
    if(t==t1)
        for i = 1:max_jobs
            if(t==a(i))
                index = i;
            end
        end
        a(index) = 9999;
        b(index) = 9999;
        op(count1) = index;
        count1 = count1 + 1;
    else
        for i = 1:5
            if(t==b(i))
                index = i;
            end
        end
        a(index) = 9999;
        b(index) = 9999;
        op(count2) = index;
        count2 = count2 - 1;
    end
    
    op
end


