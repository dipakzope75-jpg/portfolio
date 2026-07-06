#include<stdio.h>
#include<conio.h>
void main();
int src;
struct node
{
int data;
struct node * next;
}*start=NULL,*ptr=NULL,*nn=NULL,*temp=NULL;
void getnn()
{
int val;
printf("Enter value");
scanf("%d",&val);
nn=(struct node *)(malloc(sizeof(struct node *)));
nn->data=val;
nn->next=NULL;
}
void display()
{
printf("\nLL elements are\n");
ptr=start;
while(ptr->next!=NULL)
{
printf("%d\t",ptr->data);
ptr=ptr->next;
}
printf("%d",ptr->data);
getch();
main();
}
void delete_first()
{
if(start==NULL)
{
printf("\nLL is empty");
}
else
{
ptr=start;
start=start->next;
free(ptr);
}
display();
}
void delete_last()
{
if(start==NULL)
{
printf("\nLL is empty");
}
else
{
ptr=start;
while(ptr->next->next!=NULL)
{
ptr=ptr->next;
}
temp=ptr->next;
ptr->next=NULL;
free(temp);
}
display();
}
void delete_after()
{
int src;
printf("\nEnter node after delete");
scanf("%d",&src);
if(start==NULL)
{
printf("\nLL is empty");
}
else
{
ptr=start;
while(ptr->data!=src)
{
ptr=ptr->next;
}
temp=ptr->next;
ptr->next=temp->next;
free(temp);
}
display();
}
void delete_before()
{
int src;
printf("\nEnter node before");
scanf("%d",&src);
if(start==NULL)
{
printf("\nLL is empty");
}
else
{
ptr=start;
/* while(ptr->next->data!=src)
{
ptr=ptr->next;
}
temp=start;
while(temp->next!=ptr)
{
temp=temp->next;
} */
while(ptr->next->data!=src)
{
temp=ptr;
ptr=ptr->next;
}
temp->next=ptr->next;
free(ptr);
}
display();
}
void insert_first()
{
getnn();
if(start==NULL)
{
start=nn;
}
else
{
nn->next=start;
start=nn;
}
display();
}
void create()
{
getnn();
if(start==NULL)
{
start=nn;
}
else
{
ptr=start;
while(ptr->next!=NULL)
{
ptr=ptr->next;
}
ptr->next=nn;
}
display();
// getch();
// main();
}
void insert_before()
{
int src;
printf("\nEnter value before node");
scanf("%d",&src);
getnn();
if(start==NULL)
{
printf("\nLL is empty");
}
else
{
ptr=start;
while(ptr->next->data!=src)
{
ptr=ptr->next;
}
nn->next=ptr->next;
ptr->next=nn;
}
display();
}
void insert_last()
{
getnn();
if(start==NULL)
{
start=nn;
}
else
{
ptr=start;
while(ptr->next!=NULL)
{
ptr=ptr->next;
}
ptr->next=nn;
}
display();
// getch();
// main();
}
void insert_after()
{
int src;
printf("Enter value after node ");
scanf("%d",&src);
getnn();
if(start==NULL)
{
printf("\nLl is emepty");
}
else
{
ptr=start;
while(ptr->data!=src)
{
ptr=ptr->next;
}
nn->next=ptr->next;
ptr->next=nn;
}
display();
}
void count()
{
int cnt=1;
if(start==NULL)
{
printf("\nLinked list is empty");
}
else
{
ptr=start;
while(ptr->next!=NULL)
{
cnt++;
ptr=ptr->next;
}
printf("Total nodes are %d",cnt);
}
display();
}
void main()
{
int ch;
printf("\n1. create node");
printf("\n2. display");
printf("\n3.Insert at last");
printf("\n4.Insert at first");
printf("\n5. Insert after node");
printf("\n6. Insert before node");
printf("\n7. Delete at first");
printf("\n8. Delete at last");
printf("\n9. Delete after node");
printf("\n10. Delete before node");
printf("\n11. count");
printf("\n12. exit");
printf("\nEnter your choice");
scanf("%d",&ch);
switch(ch)
{
case 1:create();break;
case 2:display();break;
case 3:insert_last();break;
case 4:insert_first();break;
case 5:insert_after();break;
case 6:insert_before();break;
case 7:delete_first();break;
case 8:delete_last();break;
case 9:delete_after();break;
case 10:delete_before();break;
case 11:count();break;
case 12:exit(0);break;
default:printf("\nPlease enter valid choice\n");
getch();
// break;
main();
}
getch();
}
