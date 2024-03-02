let i,j,n,str;
n=5;

for(i=1;i<=n;i++)
{
    str="";
    for(j=1;j<=n-i;j++)
    {
        str += " ";
    }

    for(j=1;j<=i;j++)
    {
        str += j;
    }
    console.log(str);
}

for(i=n-1;i>=1;i--)
{
    str="";
    for(j=1;j<=n-i;j++)
    {
        str +=" ";
    }
    for(j=1;j<=i;j++)
    {
        str+=j;
    }
    console.log(str);
}