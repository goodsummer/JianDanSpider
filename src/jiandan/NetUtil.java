package jiandan;

import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class NetUtil {
		
	/**
	    * @Title: httpGet
	    * @Description: httpget util
	    * @param @param url
	    * @param @return    参数
	    * @return byte[]    返回类型
	    * @throws
	 */
	public static byte[] httpGet(String url) {
		
		HttpClient client = HttpClients.createDefault();
		HttpGet get = new HttpGet(url);
		
		String proxyIp = SpiderConstants.PROXY_IP;
		int proxyPort = SpiderConstants.PROXY_PORT;
		
		RequestConfig requestConfig = RequestConfig.custom().setSocketTimeout(2000).setConnectTimeout(3000).build();//设置请求和传输超时时间

		if(proxyIp != "" && proxyPort != 0) {
			 // 依次是代理地址，代理端口号，协议类型  
	        HttpHost proxy = new HttpHost(proxyIp, proxyPort, "http");       
			requestConfig = RequestConfig.custom().setSocketTimeout(2000).setConnectTimeout(3000).setProxy(proxy).build();//设置请求,传输超时时间,代理IP
		}
       
		get.setConfig(requestConfig);
		get.setHeader("user-agent", SpiderConstants.HTTP_HEADER);
		
		try {
			HttpResponse response = client.execute(get);

			if(response.getStatusLine().getStatusCode() != HttpServletResponse.SC_OK) {
				System.out.println("访问" + url + "状态错误,状态码为" + response.getStatusLine().getStatusCode());

				return null;
			}		
			byte[] responseBytes = EntityUtils.toByteArray(response.getEntity());
			
			return responseBytes;
		} catch (Exception e) {
		}
		
		return null;
	}
}
