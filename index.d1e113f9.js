var e=function(e,t,n,i,o){var a=document.createElement("div"),c=document.createElement("h3"),s=document.createElement("p");a.className="notification ".concat(o),a.style.top="".concat(e,"px"),a.style.right="".concat(t,"px"),c.className="title",c.textContent=n,s.textContent=i,a.appendChild(c),a.appendChild(s),document.body.appendChild(a),setTimeout(function(){a.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.d1e113f9.js.map