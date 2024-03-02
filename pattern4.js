let i,j,n=5,str;
for(i=n;i>=1;i--)
{
    str = "";
    for(j=n-i;j>0;j--)
    {
        str +=" ";
    }
    for(j=1;j<i*2;j++)
    {
        str += j;
    }

    console.log(str);
}