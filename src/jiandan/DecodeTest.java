package jiandan;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

public class DecodeTest {

	public static void main(String[] args) {
		try {
			haha();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void haha() throws Exception {
		BufferedReader buf = new BufferedReader(
				new InputStreamReader(new FileInputStream(new File("JianDanSpider.js"))));

		// 调用js。。这里是关键 啊
		ScriptEngineManager scriptManager = new ScriptEngineManager();
		ScriptEngine js = scriptManager.getEngineByExtension("js");

		// 执行JS
		js.eval(buf);
		Invocable inv = (Invocable) js;
		
		String hash = "04c67rYcpFQ1DoufICukDjwapKwpXWNrLm00I2LDBlN0FwIERSsHb9CTfeJJk8hCL0bDLjOef3xiyvs29yR90+tMJ6EwQcLvDgZ1TPk/USZT6gm3H1CcNg";
		String con = "AAUvriBxS4kFiixVWH5e5TnZMh1v0YeA";
		String result = (String) inv.invokeFunction("fuck", hash, con);
	  
		System.out.println(result);
	}

}
