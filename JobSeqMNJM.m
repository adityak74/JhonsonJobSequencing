clear all;
clc
disp('Sample Input here :')
A = [ [50 150 80 200 30]
      [60 50 150 70 200]
      [10 20 40 50 60]
      [40 50 80 40 20]]
input_mach = input('Enter the number of Machines(More than 3) : ');
max_mach = input_mach;
max_jobs = input('Enter the number of jobs : ');

%for i = 1:max_mach
%    for j=1:max_jobs
%        A(i,j) = input('Enter the job values');
%    end
%end

B1(max_jobs) = 0;
B2(max_jobs) = 0;
for i=1:(max_mach - 1)
    for j = 1:max_jobs
        B1(j) = B1(j) + A(i,j);
    end
end

for i=2:max_mach
    for j = 1:max_jobs
        B2(j) = B2(j) + A(i,j);
    end
end

B1
B2
op = [];
count1 = 1;
count2 = max_jobs;

for i = 1:max_jobs

    t1 = min(B1);
    t2 = min(B2);
    t = min(t1,t2);
    
    if(t==t1)
        for i = 1:max_jobs
            if(t==B1(i))
                index = i;
            end
        end
        B1(index) = 9999;
        B2(index) = 9999;
        op(count1) = index;
        count1 = count1 + 1;
    else
        for i = 1:5
            if(t==B2(i))
                index = i;
            end
        end
        B1(index) = 9999;
        B2(index) = 9999;
        op(count2) = index;
        count2 = count2 - 1;
    end
    
    
end

op
