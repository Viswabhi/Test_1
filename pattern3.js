let i,j,n=5;
for(i=1;i<=n;i++)
{
    str=""
    for(j=i;j>=1;j--)
    {
        str+=j;
    }
    console.log(str);
}
for(i=n-1;i>=1;i--)
{
    str ="";
    for(j=i;j>=1;j--)
    {
        str+=j;
    }
    console.log(str);
}